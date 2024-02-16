import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const DesktopNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []); 
  return (
    <>
      <div className="h-fit w-full bg-blue-600 flex justify-around pt-2">
        <div>
          <TypeAnimation
              sequence={[
                'RSS ASSOCIATES',
                3000, 
                'Ravi Sriwastava',
                500,
                'Industrial Consultant',
                500,
                'Labour Law Advisor',
                500,
              ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '30px', display: 'inline-block', fontWeight: 'bolder', color: 'white'}}
                  repeat={Infinity}
                />
        </div>
      </div>
      <div className="h-12 w-full bg-blue-600 px-5 flex justify-between pb-2">
        <div className="flex items-center" data-aos= "fade-left">
          <h1 className="mr-2 text-white text-xl font-bold">Deals In:-</h1>
          <TypeAnimation
              sequence={[
                'Employee Provident Fund Act',
                1500, 
                'Employee State Ins. Corporation Act',
                1500,
                'Factory Act',
                1500,
                'Bonus Act',
                1500,
                'Gratuity Act',
                1500,
                'Building Approval',
                1500,
                'Shop & Commercial Estt. Act',
                1500,
                'Salary Preparation',
                1500,
              ]}
                  wrapper="span"
                  speed={20}
                  style={{ fontSize: '20px', display: 'inline-block', fontWeight: 'bolder', color: 'white'}}
                  repeat={Infinity}
                />
        </div>
        <div className="text-white text-xl font-bold flex items-center" data-aos = "fade-right">
          <Link to={"/"} className="py-1 mx-4 hover:text-red-300 hover:border-b-2">Home</Link>
          <Link to={"/"} className="py-1 mx-4 hover:text-red-300 hover:border-b-2">About</Link>
          <Link to={"/"} className="py-1 mx-4 hover:text-red-300 hover:border-b-2">Contact</Link>
          <Button onClick={onOpen} className="mx-2"><AiOutlineMenu size={"30"}/></Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay/>
            <DrawerContent className="bg-blue-600 p-10">
              <DrawerCloseButton className="fixed top-5 right-5 text-blue-600 p-1 text-2xl bg-white"/>
              <DrawerHeader data-aos="fade-left" className="text-center text-4xl font-bold text-white">RSS ASSOCIATES</DrawerHeader>
              <DrawerBody>
                <HStack className="text-2xl text-white mt-5 border-b-2">
                  <Link to={"/"} data-aos="fade-left" className="py-1 mx-4 hover:text-red-300" onClick={onClose}>Home</Link>
                  <Link to={"/"} data-aos="fade-left" className="py-1 mx-4 hover:text-red-300" onClick={onClose}>About</Link>
                  <Link to={"/"} data-aos="fade-left" className="py-1 mx-4 hover:text-red-300" onClick={onClose}>Contact</Link>
                </HStack>

              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
    </>
  )
}

export default DesktopNav