/*CMD
  command: NEET
  help: NEET selected
  need_reply: false
  auto_retry_time: 0
  answer: You selected NEET! Now choose your Subject:
  keyboard: Physics, Chemistry, Biology
  aliases: 
CMD*/
User.setProperty("exam", "NEET", "string");
Bot.runCommand("/neet_subjects");
