import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';

export default function Modal({ children, isOpen, closeModal }) {
	return (
		<>
			<Transition
				appear
				show={isOpen}
				as={Fragment}>
				<Dialog
					as="div"
					className="relative z-30"
					onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex items-center justify-center min-h-full p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
									<button
										type="button"
										onClick={closeModal}
										className="absolute z-10 p-2 rounded-full top-2 right-2 w-fit bg-slate-50">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-4 h-4">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18 18 6M6 6l12 12"
											/>
										</svg>
									</button>
									{children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
