/*CMD
  command: 12th
  help: Class selected
  need_reply: false
  auto_retry_time: 0
  answer: You selected 12th! Now choose your Exam:
  keyboard: JEE, NEET
  aliases: 
CMD*/
User.setProperty("class", "12th", "string");
Bot.runCommand("/select_exam");
