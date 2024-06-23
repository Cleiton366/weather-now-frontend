import User from "@/interfaces/user";

export class UserServices {
  async deleteUser(id: string) : Promise<void> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async logout() : Promise<void> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async updateUserUnit(id: string, unit: string) : Promise<User> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/update-unit/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ unit }),
    });
    return res.json();
  }
}