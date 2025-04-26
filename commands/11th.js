/*CMD
  command: 11th
  help: Class selected
  need_reply: false
  auto_retry_time: 0
  answer: You selected 11th! Now choose your Exam:
  keyboard: JEE, NEET
  aliases: 
CMD*/
User.setProperty("class", "11th", "string");
Bot.runCommand("/select_exam");
