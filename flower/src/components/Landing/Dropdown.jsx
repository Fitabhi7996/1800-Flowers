import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
} from '@chakra-ui/react';


import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
let count = 0;
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        // maxW="100%"
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        border={1}
        borderStyle={'solid'}
        borderColor={"rgba(47, 47, 47, 0.46);"}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
            <DesktopNav />
          </Flex>
        </Flex>

       
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  // const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger >
              <Link
                // to = {navItem.path}
                href={navItem.path}
                p={2}
                // href={navItem.href ?? '#'}
                fontSize="min(1.2vw, 0.95rem)"
                fontWeight={600}
                color={"rgb(47, 47, 47)"}
                _hover={{
                  // textDecoration: 'none',
                  color: linkHoverColor,
                  borderBottom:"2px solid black",
                  
                  // width:"100%"
                }} key={navItem.MainId}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                // _hover={{borderWidth: 0,
                //   borderStyle: "solid",
                //   boxSizing:"border-box",
                //   wordWrap: "break-word",
                //   width: "100%"
                // }}
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                w ="100%"
                // rounded={'xl'}
                minW = {"100%"}

                >
                <Flex  gap="15px" w="100%" justify={"start"}   m="auto">

                  {navItem.children.map((child) => (
                      <Box  w="18%">
                          <DesktopSubNav  key={child.Subid} {...child} />
                      </Box>
                  ))}
                  {navItem?.imageData?.map((el)=>(
                      <Box  w="22%">
                          <Img src={el.image} w="100%"></Img>
                          <Link color="">{el.text}</Link>
                      </Box>
                  ))}
                </Flex>

              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      // to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
            textAlign="left">
            {label}
          </Text>
          {subLabel?.map((el)=>(
              <Text textAlign={"left"} fontSize={"sm"} mt="10px">
                  <Link>{el}</Link>
              </Text>
          ))}
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.Subid} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
  

  
  const NAV_ITEMS= [
    {
      path:"/products",
        MainId:count++,
      label: 'EASTER',
      imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7017cc3e8e70fb48/640b1ab4df61e31094ff5053/personalized-easter-gifts-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Personalised Easter Gifts >"}
    ,{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2ab71cd541dde17f/640b1afbe5ffbf108e0bc058/easter-chocolates-gift-baskets-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Chocolates & Gift Baskets >"}],
    //   imageText:["Personalised Easter Gifts >","Chocolates & Gift Baskets >"],
    //   images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7017cc3e8e70fb48/640b1ab4df61e31094ff5053/personalized-easter-gifts-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}","https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2ab71cd541dde17f/640b1afbe5ffbf108e0bc058/easter-chocolates-gift-baskets-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}"],
      children: [
        {
            Subid:count++,
          label: 'Easter',
          subLabel: ['Trending Design to inspire you',"Centerpieces","Flowers","Flower & Berries","Gift For Kids","Lilies","Plants","Spring Bulb Event:Free Gift"],
          href: '/products',
        },
        {
            Subid:count++,
          label: 'Shop by Gourmet Food & Treats',
          subLabel: ['Baked Goods','Chocolate Covered Strawberries',"Easter Gift Basket & Chocolates","Fruit Bouquets","Prepared Meals","Wine Gift"],
          href: '/products',
        },
      ],

    },
    {
      path:"/products",
        MainId:count++,
      label: 'SPRING',
      imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt01ccf38be516c0db/63f916052dbe1f10bbd00a78/spring-bulbs-event-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Free Gift With Purchase >"}
    ,{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3cf8d8ad69f53fa2/63f8e117e35cc90ebcbd1b1d/personalized-spring-gifts-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Personalised Spring Gift >"}],
    //   imageText:["Personalised Easter Gifts >","Chocolates & Gift Baskets >"],
    //   images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7017cc3e8e70fb48/640b1ab4df61e31094ff5053/personalized-easter-gifts-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}","https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2ab71cd541dde17f/640b1afbe5ffbf108e0bc058/easter-chocolates-gift-baskets-fy23-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}"],
      children: [
        {
            Subid:count++,
          label: 'Spring',
          subLabel: ['All Spring Flower & Gift',"Spring Bulb Event:Free Gift","Flowering Plants","Gardening Décor","Peonies","Tulips","Wreaths"],
          href: '/products',
        },
        {
          Subid:count++,
        label: 'Seasonal Occasion',
        subLabel: ["Women's History Month",'Ramadan (3/12 - 4/21)',"Passover (4/5 - 4/13)","Easter (4/9)","National Sibling Day (4/10)"],
        href: '/products',
      },
      ],
    },
    {
      path:"/products",
        MainId:count++,
      label: 'BIRTHDAY',
      imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}",text:"Birthday Flower Subscription >"}],
      children: [
        {
            Subid:count++,
          label: 'Birthday',
          subLabel: ['All Birthday Gifts',"Birthday Best Seller","Birthday Gift Guide","Flower Subscription","Party Supllies","Plants"],
          href: '/products',
        },
        
        {
          Subid:count++,
        label: 'Gift & More',
        subLabel: ["All Keep Safe Gift",'Gift Sets',"Jwelery","Teddy Bears & More","Tribute | Free Group Video"],
        href: '/products',
      },
      {
          Subid:count++,
        label: 'Shop By Recipient',
        subLabel: ["Gift For Mom",'Gift For Her',"Gift For Kids","Gift For Wife","Gift For Husband"],
        href: './Products',
      },
      ],
    },
    {
      MainId:count++,
    label: 'SYMPATHY',
    imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta1372fb9dc484c24/62452545b55a330eea751d7c/sympathy-gift-baskets-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}",text:"Sympathy Gift Basket >"}
              ,{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt15795b74bbd909ea/6363d6003e21aa31cd7b2c9e/tribute-send-a-free-group-video-sympathy-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}",text:"Send A Free Group Video >"}],

    children: [
      {
          Subid:count++,
        label: 'Sympathy',
        subLabel: ['All Sympathy',"Empathy Gifts","Faith-Inspired Gifts","Memorial Gardensr","Pet Sympathy Gifts","Remembrance Gifts"],
        href: './Products',
      },
      {
        Subid:count++,
      label: 'Shop By Location',
      subLabel: ["Cremation Flowers",'Funeral Flowers Service',"Sympathy for Home & Office","For Cremation Service"],
      href: './Products',
    },
    ],
  },
    {
      MainId:count++,
    label: 'OCCASION',
    imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt6c298cd69e441da7/6234905a3dcb491c40ccac1c/easter-flowers-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Easter >"}
              ,{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5ac72c955f462b3f/624525fe0909bc0eb039fd94/birthday-flowers-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Birthday >"}],

    children: [
      {
          Subid:count++,
        label: 'Everyday Occasion',
        subLabel: ['Anniversary',"Birthday","Corporate Gifts","Congratulations","Get Well","Housewarming","I'm Sorry","New Baby","Retirement","Wedding"],
        href: '#',
      },
      {
        Subid:count++,
      label: 'Shop Our Sister Brand',
      subLabel: ["Cheryl's Cookies",'Free Bouquet',"Sympathy for Home & Office","For Cremation Service"],
      href: '#',
    },
    ],
  },
    {
      MainId:count++,
    label: 'FLOWERS',
    imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88e4c9f6ffccdfba/641489d09642cf6c83a2084b/peony-bouquets-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}",text:"Peonies >"}
              ,{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0244cfb7bdbaa2b8/641489949fe0141069ed54e6/fy23-foty-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}",text:"2023 Flower of the Year:Orchids >"}],

    children: [
      {
          Subid:count++,
        label: 'Flowers',
        subLabel: ['All Flowers',"2023 Flower of the Year","Best Selling Flowers","New Arrivals","Fresh From the Farm","Roses","Carnation","Daisies","Lilies","Orchids"],
        href: '#',
      },
      {
        Subid:count++,
      label: 'Signature Collection',
      subLabel: ["a-DOG-able",'Enchanting Unicorns',"Fabolous Feline","Local Artisans","Party Animal","Rosé and More","Rustic Farmhouse","WOW Luxury"],
      href: '#',
    },
    ],
  },
    {
      MainId:count++,
    label: 'PLANTS',
    imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltab7f8a3f8b0252f7/63f4fb340e330365ff16d052/plant-kween-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"The Kween is here >"}],

    children: [
      {
          Subid:count++,
        label: 'Plants',
        subLabel: ['All Plants',"Plant Kween","Plant Sell: Save upto 30%","New Arrivals","Best Selling Price","Roses","Carnation","Daisies","Lilies","Orchids"],
        href: '#',
      },
      {
        Subid:count++,
      label: 'Shop By Plant Type',
      subLabel: ["Bonsai Gallary",'Bulbs',"Dish Gardens","Flowering Plants","Gardenia Plants","Rosé and More","Green Plants","House Plants"],
      href: '#',
    },
    ],
  },
    {
      MainId:count++,
    label: 'GIFT BASKET & FOOD',
    imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt95af628ea3c558b4/62eab20519ee366ebba57a34/sharis-berries-chocolate-covered-strawberries-delivery-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}",text:"Shari's Berries >"}],

    children: [
      {
          Subid:count++,
        label: 'Gift Basket & Food',
        subLabel: ['All Gift Basket & Food',"Best seller","Same Day: Gift Basket & Food","New Arrivals","Best Selling Price","Roses","Carnation","Daisies","Lilies","Orchids"],
        href: '#',
      },
      {
        Subid:count++,
      label: 'Shop By Product',
      subLabel: ["Cakes Cookies & Bakery",'Care Pakages',"Chocolate Cover Strawberries","Chocolate gifts","Coffe & Tea","Fruit basket","Gift Basket","Kitchen Gadgets"],
      href: '#',
    },
    ],
  },
    {
      MainId:count++,
    label: 'GIFT & MORE',
    imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt16abbab9474c9dbc/62f3bc6c5c954177895b0103/personalization-mall-gifts-global-nav-banner-280x280-v2.jpg?quality=70&auto=webp&optimize={medium}",text:"Personalization Mall >"}],

    children: [
      {
          Subid:count++,
        label: 'Gift & More',
        subLabel: ['All Gift',"Keepsafe Gift","Same Day: Gift Basket & Food","New Arrivals","Best Selling Price","Roses","Carnation","Daisies","Lilies","Orchids"],
        href: '#',
      },
      {
        Subid:count++,
      label: 'Home & Living',
      subLabel: ["Barware & Entertaining",'Candles & Lanterns',"Dried Floral & Pampas Grass","Home Décor","Wall Décor(Art)","Fruit basket","Gift Basket","Kitchen Gadgets"],
      href: '#',
    },
      {
        Subid:count++,
      label: 'Shop By Occasion',
      subLabel: ['Anniversary',"Birthday","Corporate Gifts","Congratulations","Get Well","Housewarming","I'm Sorry","New Baby","Retirement","Wedding"],
      href: '#',
    },
    ],
  },
  {
    MainId:count++,
  label: 'SAME DAY DELIVERY',
  imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcd524e8830530915/624527c70909bc0eb039fd98/local-artisan-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Hand Crafted Arrangements from Local Artisans >"},
  {image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt61b32ca272356649/624527ed96ee250ebe231f7c/same-day-dessert-delivery-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Same-Day Bakery Delivery >"}],

  children: [
    {
        Subid:count++,
      label: 'Same-Day Delivery',
      subLabel: ['All Same-Day Delivery',"Flower Delivery Same-Day","Best Sellers","Local Artisans","Ballons","Cakes & Desserts","Flowers","Gift Basket & Food","Orchids"],
      href: '#',
    },
    {
      Subid:count++,
    label: 'Shop By Occasion',
    subLabel: ['Anniversary',"Birthday","Corporate Gifts","Congratulations","Get Well","Housewarming","I'm Sorry","New Baby","Retirement","Wedding"],
    href: '#',
  },
  ],
},
  {
    MainId:count++,
  label: 'SALE',
  imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc4b4a56086fe7258/641db13faf1f5455e8f4a37e/flower-deal-of-the-week-fy23-fw39-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Deal Of The Week >"},
  {image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt43e083030e5cbc88/6263168b4c266266f572fa34/celebrations-passport-test-v2-free-ship-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Learn More >"}],

  children: [
    {
        Subid:count++,
      label: 'Sale',
      subLabel: ['Spring Bulb Event: Free Gift',"Deal of the Week: Save 35%","Plant sale: Save Up to 30%","Veterans Advanteage","Radio Offers"],
      href: '#',
    },
  ],
},
  {
    MainId:count++,
  label: 'COMMUNITY',
  imageData:[{image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc4b4a56086fe7258/641db13faf1f5455e8f4a37e/flower-deal-of-the-week-fy23-fw39-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Deal Of The Week >"},
  {image:"https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt43e083030e5cbc88/6263168b4c266266f572fa34/celebrations-passport-test-v2-free-ship-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}",text:"Learn More >"}],

  children: [
    {
        Subid:count++,
      label: 'Explore the Community',
      subLabel: ['All Celebrations Communities',"Deal of the Week: Save 35%","Plant sale: Save Up to 30%","Veterans Advanteage","Radio Offers"],
      href: '#',
    },
  ],
},
  ];
