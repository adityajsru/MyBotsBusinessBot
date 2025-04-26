/*CMD
  command: JEE
  help: JEE selected
  need_reply: false
  auto_retry_time: 0
  answer: You selected JEE! Now choose your Subject:
  keyboard: Physics, Maths, Chemistry
  aliases: 
CMD*/
User.setProperty("exam", "JEE", "string");
Bot.runCommand("/jee_subjects");
