"use client"
import getInitials from "@/lib/functions";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AppNavbar() {

  const router = useRouter();

  return (
    <Navbar maxWidth="full">
      <NavbarBrand className="flex items-center">
        <Link href="/" className="gap-5">          
          <p className="font-bold text-black">Pepestore</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/dashboard">
            Tienda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/help">
            Ayuda
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ShoppingCart  className="cursor-pointer" onClick={() => {router.push('/cart')}}/>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"                                        
              size="sm"              
              className="transition-transform text-white text-md font-semibold bg-black text-white"
              name={"PEPE"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Sesión iniciada como</p>
              <p className="font-semibold">pepe@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings" onClick={() => {router.push("/profile");}}>Mi perfil</DropdownItem>
            {/* <DropdownItem key="team_settings">Team Settings</DropdownItem> */}
            {/* <DropdownItem key="analytics">Analytics</DropdownItem> */}
            {/* <DropdownItem key="system">System</DropdownItem> */}
            {/* <DropdownItem key="configurations">Ajustes</DropdownItem> */}
            {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
            <DropdownItem key="logout" color="danger" >
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
