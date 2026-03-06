const { Bot, InlineKeyboard, session } = require("grammy");
const dotenv = require("dotenv");
const DATA = require("./data");

dotenv.config();

/**
 * Startupizni Bot - Main Logic
 */

// Initialize bot with token
const bot = new Bot(process.env.BOT_TOKEN);

// Install session middleware
bot.use(session({
    initial: () => ({
        category: 'livestock', // default
        step: 'idle'
    })
}));

// --- HELPERS ---

const getMenu = (ctx) => {
    const cat = DATA.categories.find(c => c.id === ctx.session.category);
    return `🚀 <b>Startupizni Bot</b> - Tadbirkorlar markazi\n\n` +
        `Tanlangan soha: <b>${cat.icon} ${cat.title}</b>\n\n` +
        `Quyidagilardan birini tanlang:`;
};

const getGeneralKeyboard = () => {
    return new InlineKeyboard()
        .text("📚 Bilimlar", "bilimlar").text("🤝 Hamkorlar", "hamkorlar").row()
        .text("🤖 Marketing AI", "marketing").text("📊 Dashboard", "dashboard").row()
        .text("🏦 Subsidiya", "subsidiya").row()
        .text("⚙️ Sohani o'zgartirish", "change_cat");
};

// --- HANDLERS ---

bot.command("start", async (ctx) => {
    await ctx.reply(getMenu(ctx), {
        parse_mode: "HTML",
        reply_markup: getGeneralKeyboard()
    });
});

// Category Selection
bot.callbackQuery("change_cat", async (ctx) => {
    const kb = new InlineKeyboard();
    DATA.categories.forEach(c => {
        kb.text(`${c.icon} ${c.title}`, `set_cat_${c.id}`).row();
    });
    await ctx.editMessageText("Sohani tanlang:", { reply_markup: kb });
});

bot.callbackQuery(/^set_cat_(\w+)$/, async (ctx) => {
    const catId = ctx.match[1];
    ctx.session.category = catId;
    await ctx.answerCallbackQuery("Soha o'zgartirildi!");
    await ctx.editMessageText(getMenu(ctx), {
        parse_mode: "HTML",
        reply_markup: getGeneralKeyboard()
    });
});

// Bilimlar (Courses)
bot.callbackQuery("bilimlar", async (ctx) => {
    const courses = DATA.courses[ctx.session.category];
    const kb = new InlineKeyboard();
    courses.forEach(c => {
        kb.text(`${c.icon} ${c.title}`, `course_${c.id}`).row();
    });
    kb.text("⬅️ Orqaga", "main_menu");
    await ctx.editMessageText("📚 <b>Mavjud darsliklar:</b>", {
        parse_mode: "HTML",
        reply_markup: kb
    });
});

bot.callbackQuery(/^course_(\d+)$/, async (ctx) => {
    const id = parseInt(ctx.match[1]);
    const course = Object.values(DATA.courses).flat().find(c => c.id === id);
    if (course) {
        await ctx.editMessageText(
            `📖 <b>${course.title}</b>\n\n` +
            `Daraja: ${course.level}\n` +
            `Tafsilot: ${course.desc}\n\n` +
            `<i>To'liq video darsliklar uchun bizning platformaga ulaning!</i>`,
            {
                parse_mode: "HTML",
                reply_markup: new InlineKeyboard().text("⬅️ Orqaga", "bilimlar")
            }
        );
    }
});

// Hamkorlar (Suppliers)
bot.callbackQuery("hamkorlar", async (ctx) => {
    const suppliers = DATA.suppliers[ctx.session.category];
    let msg = "🤝 <b>Ishonchli hamkorlar:</b>\n\n";
    suppliers.forEach(s => {
        msg += `🔹 <b>${s.name}</b> (${s.type})\n📍 ${s.location}\n📞 ${s.contact}\n\n`;
    });
    await ctx.editMessageText(msg, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().text("⬅️ Orqaga", "main_menu")
    });
});

// Marketing AI
bot.callbackQuery("marketing", async (ctx) => {
    ctx.session.step = 'awaiting_ai_input';
    await ctx.editMessageText(
        "🤖 <b>Marketing AI</b>\n\nMahsulotingiz haqida qisqacha ma'lumot yuboring (masalan: <i>Hissori qo'chqorlar, 2mln dan</i>).\n\nBiz sizga tayyor reklama matni va targeting strategiyasini beramiz.",
        {
            parse_mode: "HTML",
            reply_markup: new InlineKeyboard().text("⬅️ Orqaga", "main_menu")
        }
    );
});

bot.on("message:text", async (ctx) => {
    if (ctx.session.step === 'awaiting_ai_input') {
        const input = ctx.message.text;
        const templates = DATA.marketingTemplates[ctx.session.category];
        const res = templates.caption.replace("{input}", input);

        await ctx.reply(res, { parse_mode: "HTML" });
        await ctx.reply(templates.ads, {
            parse_mode: "HTML",
            reply_markup: new InlineKeyboard().text("🏠 Menyuga qaytish", "main_menu")
        });
        ctx.session.step = 'idle';
    }
});

// Dashboard & Subsidy
bot.callbackQuery("dashboard", async (ctx) => {
    await ctx.editMessageText(
        "📊 <b>Dashboard (Demo)</b>\n\n" +
        "Soha bo'yicha tahlil:\n" +
        "✅ Foyda: 45,000,000 UZS\n" +
        "📉 Xarajat: 12,000,000 UZS\n" +
        "📦 Sotuv: 82 ta\n\n" +
        "<i>Tugma orqali to'liq statistikani ko'rish mumkin.</i>",
        {
            parse_mode: "HTML",
            reply_markup: new InlineKeyboard().text("⬅️ Orqaga", "main_menu")
        }
    );
});

bot.callbackQuery("subsidiya", async (ctx) => {
    await ctx.editMessageText(
        "🏦 <b>Davlat subsidiyalari</b>\n\nImtiyozli kreditlar va subsidiyalar uchun murojaat qiling:\n\n🌐 <a href='https://subsidiya.mf.uz'>subsidiya.mf.uz</a> Portaliga o'tish",
        {
            parse_mode: "HTML",
            reply_markup: new InlineKeyboard().text("⬅️ Orqaga", "main_menu")
        }
    );
});

// Main menu return
bot.callbackQuery("main_menu", async (ctx) => {
    ctx.session.step = 'idle';
    await ctx.editMessageText(getMenu(ctx), {
        parse_mode: "HTML",
        reply_markup: getGeneralKeyboard()
    });
});

// Error handling
bot.catch((err) => {
    console.error("Bot error:", err);
});

// Export or Start
if (require.main === module) {
    bot.start();
    console.log("Startupizni Bot is running...");
}

module.exports = bot;
