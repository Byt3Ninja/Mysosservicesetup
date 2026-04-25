import { useState, useEffect, useRef } from 'react';
import { Phone, Send, ArrowLeft, Paperclip, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'team';
  timestamp: Date;
  type: 'text' | 'image';
  imageUrl?: string;
};

type ChatScreenProps = {
  orderId: string;
  teamName: string;
  teamPhone: string;
  onBack: () => void;
  onCall: () => void;
};

export function ChatScreen({ orderId, teamName, teamPhone, onBack, onCall }: ChatScreenProps) {
  const { t, isRTL } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      chatWith: 'Chat with',
      typeMessage: 'Type a message...',
      send: 'Send',
      noMessages: 'No messages yet',
      startConversation: 'Start a conversation with your emergency response team',
      today: 'Today',
      yesterday: 'Yesterday'
    },
    ar: {
      chatWith: 'محادثة مع',
      typeMessage: 'اكتب رسالة...',
      send: 'إرسال',
      noMessages: 'لا توجد رسائل بعد',
      startConversation: 'ابدأ محادثة مع فريق الاستجابة للطوارئ',
      today: 'اليوم',
      yesterday: 'أمس'
    }
  };

  const text = translations[isRTL ? 'ar' : 'en'];

  // Sample initial message from team
  useEffect(() => {
    const initialMessage: Message = {
      id: '1',
      text: isRTL ? 'مرحباً! نحن في الطريق إليك. الوصول المتوقع خلال 15 دقيقة.' : 'Hello! We are on our way to you. Expected arrival in 15 minutes.',
      sender: 'team',
      timestamp: new Date(Date.now() - 5 * 60000), // 5 minutes ago
      type: 'text'
    };
    setMessages([initialMessage]);
  }, [isRTL]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate team response after 2 seconds
    setTimeout(() => {
      const responses = isRTL
        ? [
            'شكراً لك! نحن نتابع معك.',
            'تم استلام رسالتك.',
            'سنكون هناك قريباً.',
            'حسناً، شكراً للتوضيح.'
          ]
        : [
            'Thank you! We are following up with you.',
            'Message received.',
            'We will be there soon.',
            'Okay, thanks for clarifying.'
          ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const teamMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'team',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, teamMessage]);
    }, 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(isRTL ? 'ar-EG' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{text.chatWith}</h2>
              <p className="text-sm text-white/90">{teamName}</p>
            </div>
          </div>
          <button
            onClick={onCall}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <Phone className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Send className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{text.noMessages}</h3>
            <p className="text-gray-500">{text.startConversation}</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-800 shadow-sm'
                }`}
              >
                <p className="text-sm break-words">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-500 hover:text-red-600 transition-colors">
            <Paperclip className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-red-600 transition-colors">
            <ImageIcon className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={text.typeMessage}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={inputText.trim() === ''}
            className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <Send className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
