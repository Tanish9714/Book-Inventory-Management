import React from 'react';
import { Sidebar } from "flowbite-react";
// import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable } from "react-icons/hi";
import userImage from '../assets/profile.jpg';
import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';

const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="sticky top-0 h-screen">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={userImage} imgAlt="Flowbite logo">
          <p>
            {user ? user.displayName : ""}
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            {/* <Sidebar.Item href="/admin/dashboard/user" icon={HiUser}>
              User
            </Sidebar.Item> */}
            <Sidebar.Item href="/admin/dashboard/products" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/" icon={HiArrowSmRight}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>

        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
