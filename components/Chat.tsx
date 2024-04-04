'use client'

import { Avatar, AvatarFallback,AvatarImage} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { useChat } from 'ai/react';
import { ScrollArea } from './ui/scroll-area';

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <Card className='w-[450px]'>
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent >
            <ScrollArea className='h-[400px] w-full pr-4'>
                {messages.map(message => {
                return (
                    <div key={message.id} className='flex gap-2 text-slate-600 text-sm mb-4'>
                        {message.role === 'user' && (
                            <Avatar>
                        <AvatarFallback>GS</AvatarFallback>
                        <AvatarImage src="https://github.com/devguga87.png"/>
                        </Avatar>
                        )}

                        {message.role === 'assistant' && (
                            <Avatar>
                            <AvatarFallback>RS</AvatarFallback>
                            <AvatarImage src="https://github.com/rocketseat.png"/>
                            </Avatar>
                        )}
                        
                        <p className='leading-relaxed'>
                        <span className='block font-bold text-slate-700'>
                            {message.role === 'user' ? 'Usuário' : 'AI'}
                        </span>
                        {message.content}
                        </p>
                    </div>
                )

                }
                
            )}
        </ScrollArea>
        </CardContent>
        <CardFooter >
        <form onSubmit={handleSubmit} className='w-full flex gap-2'>
          <Input placeholder='How can i help you' value={input} onChange={handleInputChange}/>
          <Button type='submit'>Send</Button>
        </form>

        </CardFooter>
        
      </Card>
    )
}