
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {Link} from "react-router-dom";

const FloatingChat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link to="/contactus">
      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
        <span>Let's talk</span>
        <MessageCircle className="w-5 h-5" />
      </Button>
      </Link>
    </div>
  );
};

export default FloatingChat;
