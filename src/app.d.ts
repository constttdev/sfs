import PocketBase from 'pocketbase';
import type { Admin, Record } from 'pocketbase';

declare global {
	declare namespace App {
		interface Locals {
			pb: PocketBase;
			user: Admin | Record | null;
		}
	}
}
