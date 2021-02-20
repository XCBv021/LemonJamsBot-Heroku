import { Composer } from 'telegraf';
import { addToQueue } from '../tgcalls';

export const playHandler = Composer.command('ids', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('This is not a chat group :/');
        return;
    }
    const text = ctx.message.text.id;
    await ctx.reply(text);
    const chat_id = chat.id;
    await ctx.reply('\n');
    await ctx.reply(chat_id);
});
