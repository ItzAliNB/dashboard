import { Command } from 'cmdk';
import { SetStateAction } from 'react';
import { Dispatch, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  return (
    <Command.Dialog
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-16 transition-opacity duration-200"
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-2xl border border-stone-200 w-full max-w-lg mx-auto overflow-hidden"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          className="w-full px-4 py-3 text-base border-b border-stone-200 outline-none placeholder:text-stone-400 focus:ring-0"
          placeholder="Type a command or search..."
        />

        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-2 text-center text-sm text-stone-500">
            No results found for <span className="font-semibold">"{value}"</span>
          </Command.Empty>

          <Command.Group heading="Navigation" className="mb-2 text-xs font-semibold text-stone-500 uppercase">
            <Command.Item
              onSelect={() => {
                navigate('/users');
                setOpen(false);
              }}
              className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors"
            >
              Users
            </Command.Item>
            <Command.Item
              onSelect={() => {
                navigate('/admins');
                setOpen(false);
              }}
              className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors"
            >
              Admins
            </Command.Item>
            <Command.Item
              onSelect={() => {
                navigate('/server');
                setOpen(false);
              }}
              className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors"
            >
              Server
            </Command.Item>
            <Command.Item
              onSelect={() => {
                navigate('/dashboard');
                setOpen(false);
              }}
              className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors"
            >
              Dashboard
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Letters" className="mb-2 text-xs font-semibold text-stone-500 uppercase">
            <Command.Item className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors">
              a
            </Command.Item>
            <Command.Item className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors">
              b
            </Command.Item>
            <Command.Separator className="my-1 h-px bg-stone-200" />
            <Command.Item className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors">
              c
            </Command.Item>
          </Command.Group>

          <Command.Item className="px-4 py-2 rounded-md text-sm text-stone-800 hover:bg-stone-100 cursor-pointer transition-colors">
            Apple
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
