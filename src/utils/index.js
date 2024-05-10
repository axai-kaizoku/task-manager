import { v4 as uuidv4 } from 'uuid';

export const formatDate = (createdAt) => {
	const date = new Date(createdAt);

	const options = {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	};

	const formattedDate = date.toLocaleString('en-US', options);

	return `${formattedDate}`;
};

export function generateNumericUUID() {
	const uuid = uuidv4();
	const numericUUID = parseInt(uuid.replace(/-/g, '').substring(0, 3), 16);
	const paddedNumericUUID = String(numericUUID).padEnd(4, '0');

	return paddedNumericUUID;
}
