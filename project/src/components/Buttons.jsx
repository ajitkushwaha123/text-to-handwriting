import React from "react";
import {Button} from "@nextui-org/react";
import {UserIcon} from './UserIcon';
import {CameraIcon} from './CameraIcon';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Button color="success" endContent={<CameraIcon/>}>
        Take a photo
      </Button>    
      <Button color="danger" variant="bordered" startContent={<UserIcon/>}>
        Delete user
      </Button>
    </div>
  );
}
