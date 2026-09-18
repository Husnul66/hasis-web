"use client";

import { useState, useEffect } from "react";
import { FaSave, FaCheckCircle, FaSpinner, FaLock, FaUserShield, FaSignOutAlt } from "react-icons/fa";

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const [formData, setFormData] = useState({ phone: "", email: "", address: "", whatsapp: "" });
  const [status, setStatus] = useState({ loading: false, message: "", type: "" });

  useEffect(() => {
    const token = localStorage.getItem("hasis_admin_token");
    if (token === "hasis-secure-token-999") {
      setIsAuthenticated(true);
      fetchContactData();
    }
  }, []);

  const fetchContactData = () => {
    fetch("http://127.0.0.1:8000/api/contact")
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error("Veri çekilemedi:", err));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("hasis_admin_token", data.token);
        setIsAuthenticated(true);
        fetchContactData();
      } else {
        setLoginError("Kullanıcı adı veya şifre hatalı!");
      }
    } catch (error) {
      setLoginError("Sunucuya bağlanılamadı.");
    } finally {
      setIsLoginLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, message: "Sistem verileri başarıyla senkronize edildi.", type: "success" });
      } else throw new Error("Hata");
    } catch (error) {
      setStatus({ loading: false, message: "Kritik hata: Sunucuyla iletişim kurulamadı.", type: "error" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("hasis_admin_token");
    setIsAuthenticated(false);
  };

  // --- ŞIK LOGIN EKRANI ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 font-sans">
        {/* Glassmorphism Kartı */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-10 border border-purple-500/30 text-center relative overflow-hidden">
          {/* Arka plan parlama efekti */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-900/50 rotate-3">
            <FaLock className="text-white w-8 h-8 -rotate-3" />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">HASİS <span className="text-purple-400">YÖNETİM</span></h1>
          <p className="text-gray-400 text-sm mb-8">Sisteme erişmek için yetkili kimliğinizi doğrulayın.</p>
          
          <form onSubmit={handleLogin} className="space-y-5 text-left">
            <div>
              <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Kullanıcı Adı</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className="w-full bg-gray-900/80 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all placeholder-gray-600"
                placeholder="admin"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Şifre</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full bg-gray-900/80 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all placeholder-gray-600"
                placeholder="••••••••"
                required
              />
            </div>
            
            {loginError && <p className="text-red-400 text-sm text-center font-medium bg-red-900/20 py-2 rounded-lg border border-red-500/20">{loginError}</p>}
            
            <button
              type="submit"
              disabled={isLoginLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-8 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5"
            >
              {isLoginLoading ? <FaSpinner className="animate-spin w-5 h-5" /> : "Sisteme Giriş Yap"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- ŞIK YÖNETİM PANELİ (DASHBOARD) ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center py-12 p-4 font-sans text-gray-100">
      <div className="bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-3xl p-8 md:p-12 border border-purple-500/20 relative overflow-hidden">
        
        {/* Üst Parlama */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <button 
          onClick={handleLogout}
          className="absolute top-6 right-6 md:top-10 md:right-10 text-sm font-semibold text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700 hover:border-red-500/30"
        >
          <FaSignOutAlt />
          <span>Çıkış</span>
        </button>

        <div className="border-b border-gray-700 pb-8 mb-8 mt-4 md:mt-0">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-purple-900/50 p-3 rounded-xl border border-purple-500/30">
              <FaUserShield className="text-purple-400 w-7 h-7" />
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Sistem <span className="text-purple-400">Kontrol Merkezi</span></h1>
          </div>
          <p className="text-gray-400">Web sitenizin iletişim altyapısını gerçek zamanlı olarak yönetin.</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Telefon Numarası</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-gray-900/80 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">E-posta Adresi</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-900/80 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">WhatsApp Bağlantı Numarası</label>
            <input
              type="text"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full bg-gray-900/80 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Genel Merkez Adresi</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-gray-900/80 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
              required
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-900/20 text-green-400 border border-green-500/20' : 'bg-red-900/20 text-red-400 border border-red-500/20'}`}>
              <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/30 mt-4 hover:shadow-purple-600/50 hover:-translate-y-0.5"
          >
            {status.loading ? <FaSpinner className="animate-spin w-5 h-5" /> : <FaSave className="w-5 h-5" />}
            Konfigürasyonu Kaydet
          </button>
        </form>
      </div>
    </div>
  );
}