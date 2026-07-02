-- Wipe all chat logs (messages first due to FK on session_id).
DELETE FROM chat_messages;
DELETE FROM chat_sessions;
