/**
 * Startupizni Bot Data Module
 * Extracted from Tadbirkor-Yo'li ecosystem.
 */

const DATA = {
    categories: [
        { id: 'livestock', icon: '🐑', title: 'Chorvachilik' },
        { id: 'textile', icon: '👕', title: 'Tekstil' },
        { id: 'agriculture', icon: '🌿', title: 'Dehqonchilik' },
        { id: 'food', icon: '🥖', title: 'Oziq-ovqat' }
    ],
    courses: {
        livestock: [
            { id: 1, title: "Hissori qo'ychilik sirlari", level: "Boshlang'ich", icon: "🐑", desc: "Hissori zotini tanlash, boqish va ko'paytirish bo'yicha to'liq qo'llanma." },
            { id: 2, title: "Intensiv bo'rdoqichilik", level: "O'rta", icon: "🥩", desc: "100 kunda qo'ylarni maksimal vaznga olib chiqish texnologiyasi." },
            { id: 3, title: "Veterinariya va emlash", level: "Yuqori", icon: "💉", desc: "Kasalliklarning oldini olish va davolash jadvali." }
        ],
        textile: [
            { id: 10, title: "Tikuv syexini noldan ochish", level: "Boshlang'ich", icon: "👕", desc: "Xona tanlash, uskunalar sotib olish va ishchilarni yollash." },
            { id: 11, title: "Xitoydan mato importi", level: "Yuqori", icon: "📦", desc: "Kargo xizmatlari, bojxona va sifatli mato yetkazib beruvchilar." },
            { id: 12, title: "Brending va kiyim dizayni", level: "O'rta", icon: "🎨", desc: "O'z kiyim brendingizni yaratish va bozorga chiqarish." }
        ],
        agriculture: [
            { id: 20, title: "Zamonaviy issiqxonalar", level: "Boshlang'ich", icon: "🌿", desc: "Gidroponika va an'anaviy issiqxonalar tahlili." },
            { id: 21, title: "Tomchilatib sug'orish", level: "O'rta", icon: "💧", desc: "Suvni tejash va hosildorlikni oshirish tizimlari." },
            { id: 22, title: "Eksportbop mevalar", level: "Yuqori", icon: "🍎", desc: "Yevropa va Rossiya bozorlari uchun sifat standartlari." }
        ],
        food: [
            { id: 30, title: "Mini-novvoyxona ochish", level: "Boshlang'ich", icon: "🥖", desc: "Issiq non va somsa tayyorlash biznes rejasi." },
            { id: 31, title: "Konditer mahsulotlari", level: "O'rta", icon: "🍰", desc: "Tort va shirinliklar pishirish texnologiyasi." },
            { id: 32, title: "Oziq-ovqat do'koni menejmenti", level: "Yuqori", icon: "🛒", desc: "Sotuvni nazorat qilish va avtomatlashtirish tizimlari." }
        ]
    },
    suppliers: {
        livestock: [
            { id: 101, name: "Andijon Qo'y Bozori", location: "Jalaquduq", type: "Bozor", contact: "+998 74 222 11 00" },
            { id: 102, name: "Vetservis Oltin Meros", location: "Andijon", type: "Vet", contact: "+998 74 222 12 00" }
        ],
        textile: [
            { id: 201, name: "Toshkent Mato Center", location: "Abu Saxiy", type: "Mato", contact: "+998 71 200 00 11" },
            { id: 202, name: "Sewing Tech Machines", location: "Malika", type: "Uskunalar", contact: "+998 71 200 00 22" }
        ],
        agriculture: [
            { id: 301, name: "Agro-Innovatsiya Ozuqa", location: "Namangan", type: "O'g'it", contact: "+998 69 222 33 44" },
            { id: 302, name: "Greenhouse Systems", location: "Toshkent", type: "Konstruksiya", contact: "+998 71 300 44 55" }
        ],
        food: [
            { id: 401, name: "Un va Don Markazi", location: "Qo'yliq", type: "Xom-ashyo", contact: "+998 71 444 55 66" },
            { id: 402, name: "FoodPack Packaging", location: "Zangiota", type: "Qadoqlash", contact: "+998 71 555 66 77" }
        ]
    },
    marketingTemplates: {
        livestock: {
            caption: "✨ <b>Sotuvchi matn (Chorva):</b>\n\nQurbonlik uchun yoki sarmoya uchun eng yaxshi qo'chqorlar kerakmi? 🐏\n\n{input} — bizning podamizdan eng saralari! 🇺🇿 Sog'lom, semiz va barakali.\n\n✅ Veterinariya ko'rigidan o'tgan\n✅ Yetkazib berish tekin\n\nNarxini bilish uchun Directga yozing! 📩",
            ads: "🎯 <b>Targeting (Chorva):</b>\nAuditoriya: 25-60 yosh, erkaklar.\nHudud: Vodiy va Toshkent.\nQiziqishlar: Chorvachilik, Qurbonlik, Dehqonchilik."
        },
        textile: {
            caption: "✨ <b>Brendingiz uchun matn (Tekstil):</b>\n\nYangi kolleksiya sotuvda! 👕\n\n{input} — sifatli mato va mukammal tikuv uyg'unligi.\n\n✅ Sifat kafolati\n✅ Ulgurji narxlarda\n\nBuyurtma: Direct! 📩",
            ads: "🎯 <b>Targeting (Tekstil):</b>\nAuditoriya: 18-45 yosh, ayollar va erkaklar.\nHudud: Butun O'zbekiston.\nQiziqishlar: Moda, Online shopping, Kiyimlar."
        },
        agriculture: {
            caption: "✨ <b>Dehqonchilik mahsulotlari:</b>\n\nDaladan to'g'ri dasturxoningizga! 🌿\n\n{input} — tabiiy va foydali.\n\n✅ Kimyoviy o'g'itlarsiz\n✅ Yangi uzilgan\n\nBog'lanish: 📞",
            ads: "🎯 <b>Targeting (Dehqonchilik):</b>\nAuditoriya: 22-55 yosh, uy bekalari va tadbirkorlar.\nQiziqishlar: Sog'lom ovqatlanish, Eksport, Dehqonchilik."
        },
        food: {
            caption: "✨ <b>Mazali taklif (Oziq-ovqat):</b>\n\nIssiq va mazali! 🥐\n\n{input} — bizning novvoyxonamizdan maxsus siz uchun.\n\n✅ Sifatli masalliqlar\n✅ Hamyonbop narx\n\nKeling va baho bering! 📍",
            ads: "🎯 <b>Targeting (Oziq-ovqat):</b>\nAuditoriya: Mahalliy aholi (3-5 km radius).\nQiziqishlar: Fast-food, Non mahsulotlari, Kechki ovqat."
        }
    }
};

module.exports = DATA;
