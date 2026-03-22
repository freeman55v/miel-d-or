import React from 'react';
// On utilise 'Flower' à la place de 'Bee' pour éviter l'erreur de version
import { Flower, MapPin, ShoppingCart, Send } from 'lucide-react';

function App() {
  const sendWhatsApp = (format) => {
    const message = `Bonjour Miel d'Or, je souhaiterais commander le format ${format}.`;
    window.open(`https://wa.me/22898385510?text=${encodeURIComponent(message)}`, '_blank');
  };

  const products = [
   
    { size: "0,5 Litre", price: "2500f", img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400" },
    { size: "1 Litre", price: "4500f", img: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400" },
    { size:"1 litre" ,price: "4500f" , img: "/miel3.jpg"},
    { size:"0,5 litre" ,price:"2500f" , img: "/miel1.jpg"},
    { size:"350ml" , price:"2000f" , img: "/MIEL2.jpg"}
    
  ];
  const aboutMe = {
  title: "L'Aventure Miel d'Or",
  story: "Passionné par la nature de notre belle région de Kara, j'ai décidé de partager avec vous le trésor de nos ruches. Ce qui a commencé par une simple curiosité pour les abeilles est devenu une mission : vous offrir un miel 100% pur, sans aucun mélange, comme la nature l'a voulu.",
  signature: "barthelemi, Fondateur"
};
const handleOrder = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const product = e.target.product.value;
    const message = `Bonjour barthelemi ! Je m'appelle ${name}. Je souhaite commander : ${product}.`;
    const whatsappUrl =`https://wa.me/22890000000?text=${encodeURIComponent(message)}`; // REMPLACE PAR TON NUMÉRO
    window.open(whatsappUrl, '_blank');
  };
  const qualitySteps = [
  { step: "01", title: "Récolte Traditionnelle", desc: "Extraction à froid pour garder toutes les vitamines du miel." },
  { step: "02", title: "Zéro Sucre Ajouté", desc: "Analyse rigoureuse : 100% pur nectar de fleurs de la région de Kara." },
  { step: "03", title: "Filtrage Naturel", desc: "Un filtrage simple pour enlever les impuretés sans dénaturer le goût." }
];
const gallery =[
  {url:"/bart1.avif" , caption: "notre miel"},
  {url:"/bart2.webp" , caption : "les niches"},
  {url :"/barth3.png" , caption:"nos abeilles"},
  {url :"/barth4.jpg" , caption:"nos abeilles"}
];
{/* Section À Propos - L'Histoire de Léopold */}
<section className="py-20 px-6 bg-[#FDFBF7]">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Photo de toi ou d'une ruche en gros plan */}
    <div className="md:w-1/2">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full -z-10"></div>
        <img 
          src="/votre-photo.jpg" 
          alt="Léopold Dzobe" 
          className="rounded-3xl shadow-2xl w-full h-[400px] object-cover border-8 border-white"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600"; }}
        />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFB800]/20 rounded-full -z-10"></div>
      </div>
    </div>

    {/* Texte de l'histoire */}
    <div className="md:w-1/2">
      <span className="text-[#B45309] font-bold tracking-widest uppercase text-sm italic">L'homme derrière le miel</span>
      <h2 className="text-4xl font-black text-amber-900 mt-2 mb-6 leading-tight">
        {aboutMe.title}
      </h2>
      <p className="text-amber-900 text-lg leading-relaxed mb-6">
        {aboutMe.story}
      </p>
      <div className="border-t border-amber-200 pt-6">
        <p className="font-black text-xl text-amber-900">{aboutMe.signature}</p>
        <p className="text-amber-700">Apiculteur passionné à Kara</p>
      </div>
    </div>

  </div>
</section>
const features = [
  { emoji: "🌿", title: "100% Bio", desc: "Sans additifs, pur nectar." },
  { emoji: "📍", title: "Origine Kara", desc: "Récolté localement au Togo." },
  { emoji: "🚀", title: "Livraison", desc: "Rapide à Kara et Lomé." }
];
const contactInfo = {
  phone: "+228 98385510", // Mets ton vrai numéro ici
  location: "Quartier Chaminade, Kara - Togo",
  hours: "Lun - Sam : 08h00 - 18h00"
};
const testimonials = [
  { name: "Maman Marie", city: "Kara", text: "Le miel le plus pur que j'ai trouvé pour mes enfants. Je recommande !" },
  { name: "Koffi A.", city: "Lomé", text: "Livraison rapide et emballage très soigné. Le goût est incroyable." },
  { name: "Dr. Amévi", city: "Sokodé", text: "Excellent pour soigner les maux de gorge naturellement." }
];
<section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-black mb-10 text-amber-900">Pourquoi notre Miel ?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <div className="text-4xl mb-2">🌿</div>
        <h3 className="font-bold text-xl">100% Bio</h3>
        <p className="text-amber-800 text-sm">Sans additifs, directement de la ruche.</p>
      </div>
      <div>
        <div className="text-4xl mb-2">📍</div>
        <h3 className="font-bold text-xl">Origine Kara</h3>
        <p className="text-amber-800 text-sm">Récolté localement avec passion.</p>
      </div>
      <div>
        <div className="text-4xl mb-2">🚀</div>
        <h3 className="font-bold text-xl">Livraison Rapide</h3>
        <p className="text-amber-800 text-sm">On vous livre partout au Togo.</p>
      </div>
    </div>
  </div>
</section>
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-amber-950">
      {/* Barre de navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-[#FFB800] bg-amber-50">
  <img 
    src="/logo-miel.png" 
    alt="Logo Miel d'Or" 
    className="w-full h-full object-cover" 
  />
</div>
          <span className="text-2xl font-black">MIEL D'OR</span>
        </div>
        <button className="bg-[#FFB800] text-white px-5 py-2 rounded-full font-bold flex items-center gap-2">
          <ShoppingCart size={18} /> Boutique
        </button>
      </nav>

      {/* En-tête / Hero */}
      <header className="py-16 px-6 text-center">
        <h1 className="text-6xl font-black mb-4 text-[#B45309]">Miel d'Or</h1>
        <p className="italic text-xl mb-6 text-amber-800">"Du nectar pur des fleurs sur votre table"</p>
        <div className="flex justify-center items-center gap-2 bg-white w-fit mx-auto px-4 py-2 rounded-full shadow-sm border border-amber-100">
          <MapPin size={20} className="text-red-500" /> 
          <span className="font-medium text-amber-900">Kara, Togo</span>
        </div>
      </header>

      {/* Liste des Produits */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {products.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-50 hover:scale-105 transition-transform duration-300">
            <img src={item.img} alt={item.size} className="w-full h-56 object-cover" />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">{item.size}</h3>
              <p className="text-4xl font-black text-[#FFB800] mb-8">{item.price}</p>
              <button 
                onClick={() => sendWhatsApp(item.size)} 
                className="w-full py-4 rounded-2xl bg-amber-50 text-[#B45309] font-black text-lg hover:bg-[#FFB800] hover:text-white transition-colors"
              >
                acheter
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* Section Galerie : Abeilles et Nature */}
<section className="bg-amber-100 py-16 px-6 mt-12">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-black text-center mb-4 text-amber-900">Origine & Nature</h2>
    <p className="text-center text-amber-800 mb-12 italic">Découvrez l'environnement pur où nos abeilles produisent votre Miel d'Or.</p>
    
    <div className="grid md:grid-cols-3 gap-6">
      {gallery.map((photo, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg border-4 border-white">
          <img 
            src={photo.url} 
            alt={photo.caption} 
            className="w-full h-72 object-cover transform group-hover:scale-110 transition-duration-500" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-bold text-lg">{photo.caption}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Section Pourquoi nous choisir */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center border-t border-amber-100 pt-12">
    <h2 className="text-3xl font-black mb-12 text-amber-900 uppercase tracking-widest">
      L'excellence du Miel d'Or
    </h2>
    <div className="grid md:grid-cols-3 gap-12">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-center group">
          <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform">
            {item.emoji}
          </div>
          <h3 className="font-bold text-xl mb-2 text-amber-950">{item.title}</h3>
          <p className="text-amber-800 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Section Contact & Localisation */}
<section className="py-16 px-6 bg-amber-50">
  <div className="max-w-6xl mx-auto">
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      
      {/* Infos de contact */}
      <div className="p-10 md:w-1/2">
        <h2 className="text-3xl font-black mb-6 text-amber-900 text-center md:text-left">Où nous trouver ?</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-xl text-amber-700 font-bold">📍</div>
            <div>
              <p className="font-bold text-lg">Notre adresse</p>
              <p className="text-amber-800">{contactInfo.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-xl text-amber-700 font-bold">📞</div>
            <div>
              <p className="font-bold text-lg">Appelez-nous</p>
              <p className="text-amber-800">{contactInfo.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-xl text-amber-700 font-bold">⏰</div>
            <div>
              <p className="font-bold text-lg">Horaires</p>
              <p className="text-amber-800">{contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Petite carte stylisée ou image de ton point de vente */}
      <div className="md:w-1/2 bg-amber-200 h-64 md:h-auto flex items-center justify-center text-center p-8">
        <div>
          <p className="text-5xl mb-4">🏠</p>
          <p className="font-black text-amber-900 text-xl italic leading-tight">
            "Passez prendre votre Miel d'Or <br/> directement à la source !"
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Section Témoignages */}
<section className="py-20 px-6 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-black text-center mb-16 text-amber-900">
      Ils adorent notre Miel d'Or 🍯
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-amber-50 p-8 rounded-3xl relative">
          {/* Petites guillemets de décoration */}
          <div className="text-6xl text-amber-200 absolute top-4 left-4 font-serif">“</div>
          <p className="text-amber-900 italic mb-6 relative z-10 leading-relaxed">
            {t.text}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center text-white font-bold">
              {t.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-amber-950">{t.name}</p>
              <p className="text-xs text-amber-600 uppercase tracking-widest">{t.city}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Section Engagement Qualité - VITAL */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-amber-900 uppercase">Notre Engagement Pureté</h2>
      <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-4"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {qualitySteps.map((item, i) => (
        <div key={i} className="border-l-4 border-amber-400 pl-6 py-4 bg-amber-50/50 rounded-r-2xl">
          <span className="text-4xl font-black text-amber-200 block mb-2">{item.step}</span>
          <h3 className="text-xl font-bold text-amber-950 mb-2">{item.title}</h3>
          <p className="text-amber-800 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
    
    {/* Petit badge de garantie */}
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold border border-green-200">
        <span>✅</span> Garanti 100% Naturel & Non Transformé
      </div>
    </div>
  </div>
</section>
{/* Section À Propos - L'Histoire de barthelemi */}
<section className="py-20 px-6 bg-[#FDFBF7]">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Photo de toi ou d'une ruche en gros plan */}
    <div className="md:w-1/2">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full -z-10"></div>
        <img 
          src="/photo-ruche.jpg" 
          alt="batrhelemi" 
          className="rounded-3xl shadow-2xl w-full h-[400px] object-cover border-8 border-white"
          onError={(e) => { e.target.src = "/photo-ruche.jpg"; }}
        />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFB800]/20 rounded-full -z-10"></div>
      </div>
    </div>

    {/* Texte de l'histoire */}
    <div className="md:w-1/2">
      <span className="text-[#B45309] font-bold tracking-widest uppercase text-sm italic">L'homme derrière le miel</span>
      <h2 className="text-4xl font-black text-amber-900 mt-2 mb-6 leading-tight">
        {aboutMe.title}
      </h2>
      <p className="text-amber-900 text-lg leading-relaxed mb-6">
        {aboutMe.story}
      </p>
      <div className="border-t border-amber-200 pt-6">
        <p className="font-black text-xl text-amber-900">{aboutMe.signature}</p>
        <p className="text-amber-700">Apiculteur passionné à Kara</p>
      </div>
    </div>

  </div>
</section>
{/* Section Commande Rapide */}
<section className="py-20 px-6 bg-amber-900 text-white">
  <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-10 items-center">
    
    <div className="md:w-1/2 text-amber-950">
      <h2 className="text-3xl font-black mb-4">Passez Commande 🍯</h2>
      <p className="text-amber-800 mb-6">
        Remplissez vos informations et nous finaliserons la livraison ensemble sur WhatsApp.
      </p>
      <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-2xl border border-amber-200">
        <span className="text-2xl">📦</span>
        <p className="text-sm font-medium italic">Expédition rapide vers Lomé, Sokodé et tout le Togo depuis Kara.</p>
      </div>
    </div>

    <form onSubmit={handleOrder} className="md:w-1/2 w-full space-y-4">
      <input 
        type="text" 
        name="name" 
        placeholder="Votre Nom complet" 
        required 
        className="w-full p-4 rounded-xl border-2 border-amber-100 text-amber-900 focus:border-amber-500 outline-none transition-all"
      />
      <select 
        name="product" 
        className="w-full p-4 rounded-xl border-2 border-amber-100 text-amber-900 focus:border-amber-500 outline-none transition-all"
      >
        <option>Miel d'Or - 350ml (2000f)</option>
        <option>Miel d'Or - 0,5 Litre (2500f)</option>
        <option>Miel d'Or - 1 Litre (4500f)</option>
      </select>
      <button 
        type="submit" 
        className="w-full bg-[#FFB800] hover:bg-amber-500 text-amber-950 font-black py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
      >
        <span>🚀</span> ENVOYER MA COMMANDE
      </button>
    </form>

  </div>
</section>

      {/* Pied de page */}
      <footer className="bg-amber-950 text-white py-12 text-center mt-12">
        <div className="mb-6">
          <p className="text-2xl font-bold text-amber-400 mb-2">Miel d'Or</p>
          <p className="text-amber-200">Qualité supérieure, récolté localement.</p>
        </div>
        <button 
          onClick={() => sendWhatsApp("Informations générales")} 
          className="inline-flex items-center gap-3 bg-green-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-700 transition"
        >
          <Send size={20} /> Discuter sur WhatsApp
        </button>
        <p className="mt-8 text-amber-700 text-sm">© 2026 Miel d'Or - Kara, Togo</p>
      </footer>
    </div>
  );
}

export default App;