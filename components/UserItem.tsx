'use client';

const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>SR</p>
        </div>
        <div className="grow">
        <p className="text-[16px] font-bold">Shafique Ur Rehman</p>
        <p className="text-[12px] text-neutral-500">kzshafique77@gmail.com</p>
        </div>
    </div>
  )
}

export default UserItem