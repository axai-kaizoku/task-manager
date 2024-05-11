import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';

export default function DropdownMenu({ title, icon, position, children }) {
	return (
		<Menu>
			<MenuButton className="inline-flex items-center gap-2 font-semibold rounded-md text-sm/6">
				{title}
				{icon}
			</MenuButton>
			<Transition
				enter="transition ease-out duration-75"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95">
				<MenuItems
					anchor={position}
					className="flex flex-col w-20 gap-1 p-1 text-sm origin-top-right bg-white border text-slate-700/70 rounded-xl focus:outline-none">
					{children}
				</MenuItems>
			</Transition>
		</Menu>
	);
}
