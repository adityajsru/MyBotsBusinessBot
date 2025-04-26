/*CMD
  command: Dropper
  help: Class selected
  need_reply: false
  auto_retry_time: 0
  answer: You selected Dropper! Now choose your Exam:
  keyboard: JEE, NEET
  aliases: 
CMD*/
User.setProperty("class", "Dropper", "string");
Bot.runCommand("/select_exam");
