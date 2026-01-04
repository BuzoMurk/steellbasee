
import React, { useState } from 'react';
import { Lock, ShieldAlert, Hammer, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: (success: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  // You can change this code to whatever you like!
  const SECRET_PASSCODE = 'SB-265'; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === SECRET_PASSCODE) {
      setError(false);
      onLogin(true);
    } else {
      setError(true);
      setPasscode('');
    }
  };

  return (
    <div className="min-h-screen bg-steel-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 industrial-texture pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-malawi-red rounded-full blur-[120px] opacity-20" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-malawi-orange rounded-full blur-[120px] opacity-20" />

      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-10 md:p-12 relative z-10 animate-in zoom-in-95 duration-500">
        <div className="text-center mb-10">
          <div className="bg-steel-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Lock className="w-10 h-10 text-malawi-orange" />
          </div>
          <h1 className="text-3xl font-heading font-black text-steel-900 uppercase tracking-tighter">Secure Gateway</h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">Management Access Only</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block ml-2">Enter Factory Passcode</label>
            <div className="relative group">
              <input 
                type="password"
                required
                value={passcode}
                onChange={(e) => { setPasscode(e.target.value); setError(false); }}
                placeholder="••••••"
                className={`w-full bg-gray-50 border-2 ${error ? 'border-malawi-red focus:ring-malawi-red/10' : 'border-transparent focus:ring-malawi-orange/10 focus:border-malawi-orange'} p-5 rounded-2xl text-center text-2xl tracking-[0.5em] font-black outline-none transition-all placeholder:tracking-normal placeholder:text-gray-200`}
              />
              {error && (
                <div className="absolute -bottom-8 left-0 right-0 text-center animate-in slide-in-from-top-2">
                  <span className="text-malawi-red text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> Unauthorized Access Attempt
                  </span>
                </div>
              )}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-steel-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl active:scale-95 mt-12"
          >
            Authenticate <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-steel-800">
            <Hammer className="w-4 h-4" />
            <span className="font-heading font-bold text-sm tracking-tighter">STEELBASE FURNITURE LTD</span>
          </div>
          <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Lilongwe • Malawi</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
