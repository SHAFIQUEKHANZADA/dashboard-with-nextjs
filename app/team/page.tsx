'use client';

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useState } from "react";
const UserItem = dynamic(() => import("useritem"), { ssr: false });
import { Badge } from "@/components/ui/badge"


import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

type Member = {
    email: string,
    full_name: string;
    backgroundColor: string,
    role: string,
    status?: string;
}

export default function TeamSettings() {
    const [members, setMembers] = useState<Member[]>([
        {
          email: "kzshafique77@gmail.com",
          full_name: "Shafique Ur Rehman",
          backgroundColor: "rgba(125,24,66,1)",
          role: "admin"
        },
        {
          email: "talhakhan77@gmail.com",
          full_name: "Talha",
          backgroundColor: "rgba(15,24,66,1)",
          role: "viewer"
        },
        {
          email: "zayanahmed@gmail.com",
          full_name: "Zayan Ahmed",
          backgroundColor: "rgba(1,93,26,1)",
          role: "viewer"
        },
        {
          email: "hamdan1122@gmail.com",
          full_name: "Hamdan",
          backgroundColor: "rgba(98,0,166,1)",
          role: "admin"
        },
        {
          email: "ownmuhmmad@gmail.com",
          full_name: "Aoun khanzada",
          backgroundColor: "rgba(112,34,16,1)",
          role: "viewer",
          status: "pending"
        },
    ])

    return <div className="grid gap-4"> 
        <header>
            <h2 className="text-[36px] font-[700]">Team settings</h2>
        </header>
        <div className="grid gap-4">
            <div>
                <div className="flex items-center justify-between gap-2">
                <Command className="rounded-lg border">
                <CommandInput placeholder="Type an email to invite..." />
                </Command>
                <Button variant="secondary">Add a new member</Button>
                </div>
            </div>
            <div className="border rounded">
                {members.length === 0 && <div className="p-4">There are no members yet.</div>}
                {members && members.map((members: Member, key: number) => <div className="grid grid-cols-6 border-b last:border-b-0 items-center justify-between pr-2" key={key}>
                  {/* {members.email} */}
                <div className="col-span-2">
                <UserItem 
                  backgroundColor={members.backgroundColor}
                  title={members.full_name}
                  description={members.email}
                  shadow={false}
                  border={false}
                  />
                </div>
                <div className="col-span-3 flex gap-2">
                  <Badge className={`tag ${members.role}`}>{members.role}</Badge> <br />
                  {members.status && <Badge className={`tag ${members.status}`}>{members.status}</Badge>}
                </div>
                  <div className="col-span-1 flex justify-end">
                  <Button variant="ghost">Remove</Button>
                  </div>
                </div>)}
            </div>
        </div>
    </div>
}