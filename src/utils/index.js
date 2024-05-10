import { v4 as uuidv4 } from 'uuid';

export const formatDate = (createdAt) => {
	const date = new Date(createdAt);

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

export function generateNumericUUID() {
	const uuid = uuidv4();
	const numericUUID = parseInt(uuid.replace(/-/g, '').substring(0, 3), 16);
	const paddedNumericUUID = String(numericUUID).padEnd(4, '0');

	return paddedNumericUUID;
}
