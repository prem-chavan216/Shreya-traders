import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { PackagePlus, ImagePlus, Loader2, CheckCircle, AlertCircle, Trash2, IndianRupee, Tag, LogOut, Edit3, X } from 'lucide-react';

const Admin = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [grade, setGrade] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState({ type: '', msg: '' });
  
  // Edit साठी लागणारे स्टेट्स
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setGrade(product.grade);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName(''); setDescription(''); setPrice(''); setGrade(''); setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      let finalImageUrl = products.find(p => p.id === editingId)?.imageUrl || "";

      // जर नवीन फोटो निवडला असेल तरच क्लाउडिनरीवर अपलोड करा
      if (image) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'shreya_presets');
        const res = await fetch(`https://api.cloudinary.com/v1_1/dznly8o93/image/upload`, { method: 'POST', body: formData });
        const data = await res.json();
        finalImageUrl = data.secure_url;
      }

      if (editingId) {
        // १. EDIT / UPDATE
        await updateDoc(doc(db, "products", editingId), {
          name, description, price, grade, imageUrl: finalImageUrl
        });
        setStatus({ type: 'success', msg: 'प्रॉडक्ट यशस्वीपणे अपडेट झाला!' });
      } else {
        // २. नवीन ADD
        await addDoc(collection(db, "products"), {
          name, description, price, grade, imageUrl: finalImageUrl, timestamp: serverTimestamp()
        });
        setStatus({ type: 'success', msg: 'नवीन प्रॉडक्ट ॲड झाला!' });
      }
      cancelEdit();
    } catch (error) {
      setStatus({ type: 'error', msg: 'काहीतरी चूक झाली!' });
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("हा प्रॉडक्ट काढायचा का?")) {
      await deleteDoc(doc(db, "products", id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header with Logout */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black italic">SHREYA TRADERS <span className="text-sm font-normal not-italic text-gray-500">Admin</span></h1>
        <button onClick={handleLogout} className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl font-bold hover:bg-red-100 transition-all">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-fit sticky top-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <PackagePlus size={24} />
              <h2 className="text-2xl font-black">{editingId ? "Edit Product" : "Add New Product"}</h2>
            </div>
            {editingId && (
              <button onClick={cancelEdit} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><X size={20}/></button>
            )}
          </div>

          {status.msg && (
            <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <span className="font-bold text-sm">{status.msg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Product Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-black" value={name} onChange={(e) => setName(e.target.value)} required />
            <div className="grid grid-cols-2 gap-4">
              <input type="number" placeholder="Price (₹)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-black" value={price} onChange={(e) => setPrice(e.target.value)} required />
              <input type="text" placeholder="Grade (AA+)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-black" value={grade} onChange={(e) => setGrade(e.target.value)} required />
            </div>
            <textarea placeholder="Description" rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-black" value={description} onChange={(e) => setDescription(e.target.value)} required />
            
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center cursor-pointer relative group">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setImage(e.target.files[0])} required={!editingId} />
                <ImagePlus size={24} className="mx-auto text-gray-400 group-hover:text-black mb-1" />
                <span className="text-xs font-bold text-gray-400 group-hover:text-black">{image ? image.name : editingId ? "फोटो बदलायचा असल्यास निवडा" : "फोटो निवडा"}</span>
            </div>

            <button disabled={loading} className="w-full bg-black text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 active:scale-95 disabled:bg-gray-400">
              {loading ? <Loader2 className="animate-spin" /> : editingId ? "Update Details" : "Publish Product"}
            </button>
          </form>
        </div>

        {/* List Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-fit">
          <h2 className="text-2xl font-black mb-6">Inventory Management</h2>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <img src={product.imageUrl} className="w-14 h-14 rounded-xl object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-sm">{product.name}</h4>
                    <p className="text-[10px] font-black">₹{product.price} | {product.grade}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(product)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"><Edit3 size={18} /></button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;