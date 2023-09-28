// Hero
import { LiaCheckCircleSolid } from "react-icons/lia";
import { AiOutlineArrowDown } from "react-icons/ai";

// Contacts
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BiLogoSnapchat } from 'react-icons/bi'

// Navbar
import { AiOutlineQuestionCircle, AiOutlineTeam, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdOutlineDesignServices } from 'react-icons/md';

// Services
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlineRobot } from 'react-icons/ai';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaHelmetSafety } from 'react-icons/fa6';
import { PiCouchLight } from 'react-icons/pi';

// import { MdOutlineDesignServices } from 'react-icons/md';

// Our tema
import { CgProfile } from 'react-icons/cg';

// Images
import I1 from '../images/1.jpg';
import I2 from '../images/2.jpg';
import I3 from '../images/3.jpg';
import I41 from '../images/4.jpg';
import I42 from '../images/6.jpg';
import I5 from '../images/5.jpg';
import I6 from '../images/7.jpg';
import I7 from '../images/8.jpg';
const ArabicContext = {
    Header: {
        Language: 'العربية'
    },
    Hero: {
        Name: 'مكتب المخطط الحديث الإستشاري',
        Title: 'بناء المستقبل برؤية فنية في المملكة العربية السعودية',
        Icon: <LiaCheckCircleSolid size="35" />,
        Elements: [
            'خبرة في كافة المجالات الهندسية',
            'تواجد قوي في المملكة',
            'تصميم مباني متنوعة ومبتكرة'
        ],
        CTA: 'إقرأ عننا',
        ArrowDownIcon: <AiOutlineArrowDown />
    },
    Contacts: {
        Title: 'تواصل معنا',
        Elements: [
            {
                Title: 'عنوان',
                Icon: <MdLocationOn className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Color: 'blue',
                Href: 'https://www.google.com/maps/place/KAAB7507,+7507+Prince+Abdulmajid+Ibn+Abdulaziz,+2927,+Assulimaniyah,+Tabuk+47312,+Saudi+Arabia/@28.4103621,36.5675854,19z/data=!4m6!3m5!1s0x15a9ad764a9dbbb9:0x21f49a0877b5934b!8m2!3d28.4106773!4d36.5675483!16s%2Fg%2F11v67qvl2d"                ',

            },
            {
                Title: 'واتساب',
                Icon: <BsWhatsapp className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Color: 'green',
                Value: '0508122303',
                Href: "//api.whatsapp.com/send?phone=201126798092&text=Hello"
            },
            {
                Title: 'الإيميل',
                Icon: <MdEmail className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Value: '0538725276',
                Color: 'red',
                Href: 'mailto:mohammedhuzain@hotmail.com'
            },
            {
                Title: 'سناب شات',
                Icon: <BiLogoSnapchat className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Value: 'mo2023',
                Color: 'yellow',
                Href: 'https://www.snapchat.com/add/eng.mo2023'
            },
        ]
    },
    Address: {
        Title: 'العنوان',
        Address: `الحي السليمانية
        مقابل أمانة تبوك - تبوك`,
        ActionButton: 'العثور علينا'
    },
    Navigation: {
        Elements: [
            {
                Title: 'حول',
                Icon: AiOutlineQuestionCircle,
            },
            {
                Title: 'الخدمات',
                Icon: MdOutlineDesignServices
            },
            {
                Title: 'المشاريع',
                Icon: AiOutlineFundProjectionScreen,
            },
            {
                Title: 'الأقسام',
                Icon: AiOutlineTeam
            }
        ],
    },
    Content: {
        AboutUs: {
            Title: 'حولنا',
            Elements: [
                {
                    Title: "نظرة عامة",
                    Content: 'شركة الخطة الحديثة، كيان رائد في مجال التصميم المعماري والهندسي وإدارة المشاريع والبناء في المملكة العربية السعودية. بخبرة تزيد عن 30 عامًا في تصميم أبراج الفنادق والمجمعات التجارية والمباني السكنية، نعيد تشكيل خط السماء الحضري ونبتكر أماكن استثنائية للمستقبل.'
                },
                {
                    Title: 'هدفنا',
                    Content: 'مهمتنا النهائية هي أن نصبح أكثر استشاريي التصميم المعماري والهندسي تفضيلاً وبحثًا. نسعى بجدية لتحقيق التميز في جميع جوانب عملنا، مجمعين بين الرؤية الإبداعية والخبرة التقنية العالية لتقديم تصميمات فريدة ومبتكرة تتجاوز توقعات عملائنا.'
                },
                {
                    Title: 'رسالتنا',
                    Content: 'نسعى بجدية لتقديم أفضل الحلول المبتكرة وعالية الجودة لعملائنا. نعتقد أن التميز هو أساس بناء علاقات مستدامة مع عملائنا، ولذلك نعمل بتفاني واحترافية لتلبية وتجاوز توقعاتهم. نقدر تفاصيل احتياجات عملائنا ونسعى لفهم الطبيعة الكاملة لأعمالهم وتحدياتهم، من أجل تقديم حلا دقيقًا وفعالًا لهم.'
                },
            ]
        },
        OurServices: {
            Title: 'خدماتنا',
            Elements: [
                {
                    Title: 'التصميم المعماري والهندسي',
                    Content: 'تخطيط شامل وتصميم متكامل للمباني والمرافق',
                    Icon: <MdOutlineDesignServices color='gray' size='40' />,
                },
                {
                    Title: 'تصميم الديكور الداخلي',
                    Content: 'تخطيط وتصميم المساحات الداخلية للمباني والمرافق',
                    Icon: <PiCouchLight color='gray' size='40' />,
                },
                {
                    Title: 'تخطيط المشاريع الكبرى',
                    Content: 'تخطيط شامل لتطوير المناطق والمشاريع',
                    Icon: <AiOutlineSetting color='gray' size='40' />,
                },
                {
                    Title: 'الهندسة الميكانيكية والكهربائية والصحية (MEP)',
                    Content: 'تصميم وتنفيذ أنظمة الميكانيكا والكهرباء والصحية للمباني',
                    Icon: <AiOutlineSetting color='gray' size='40' />,
                },
                {
                    Title: 'الأمان والسلامة والدفاع المدني',
                    Content: 'تصميم وتنفيذ أنظمة إطفاء الحريق والدفاع المدني',
                    Icon: <AiOutlineSafety color='gray' size='40' />,
                },
                {
                    Title: 'إدارة الصيانة',
                    Content: 'تخطيط وإشراف على أنشطة الصيانة للمرافق والهياكل',
                    Icon: <FaHelmetSafety color='gray' size='40' />,
                },
                {
                    Title: 'الأتمتة والتدريب',
                    Content: 'تطوير وتنفيذ أنظمة الأتمتة وتدريب الموظفين',
                    Icon: <AiOutlineRobot color='gray' size='40' />,
                },
            ]
        },
        OurProjects: {
            Title: 'مشاريعنا',
            Elements: [
                {
                    MainImage: I1,
                    Title: 'فيلا كود وادي حنيفة',
                    Location: 'السعودية، الرياض',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I2,
                    Title: 'مسابقة فرع وزارة الاوقاف',
                    Location: 'السعودية، مكة',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I3,
                    Title: 'فيلا سكنية',
                    Location: 'السعودية، الرياض',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I41,
                    Title: 'عمارة مكاتب',
                    Location: 'السعودية، الخبر',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: I42,
                    // Sketches: '',
                },
                {
                    MainImage: I5,
                    Title: 'فيلا سكنية',
                    Location: 'السعودية، الرياض',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I6,
                    Title: 'مسجد 300 مصلي',
                    Location: 'حي حطين',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I7,
                    Title: 'فيلا سكنية',
                    Location: 'الرياض',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
            ]
        },
        OurTeam: {
            Title: 'فريقنا الفني والإداري',
            Elements: [
                {
                    Name: 'المهندس محمد حزين مصطفى',
                    Rule: 'مدير المشروع',
                },
                {
                    Name: 'المهندس أحمد العطية',
                    Rule: 'مدير المكتب',
                },
                {
                    Name: '',
                    Rule: 'مدير قسم الإشراف',
                }
            ]
        },
        OrgChart: {
            Title: 'المخطط التنظيمي'
        },
    },
    Footer: {},
};


const EnglishContext = {
    Header: {
        Language: 'Arabic'
    },
    Hero: {
        Name: 'MODERN PLAN ENGINEERING CONSULTANCY',
        Title: 'Building the Future with an Artistic Vision in the Kingdom of Saudi Arabia',
        Icon: <LiaCheckCircleSolid size="35" />,
        Elements: [
            'More Than 30 Years of Experience',
            'Strong Presence In the Kingdom',
            'Designing diverse and innovative buildings'
        ],
        CTA: 'Keep Going',
        ArrowDownIcon: <AiOutlineArrowDown />
    },
    Contacts: {
        Title: 'Contact Us',
        Elements: [
            {
                Title: 'Address',
                Icon: <MdLocationOn className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Color: 'blue',
                Href: 'https://www.google.com/maps/place/KAAB7507,+7507+Prince+Abdulmajid+Ibn+Abdulaziz,+2927,+Assulimaniyah,+Tabuk+47312,+Saudi+Arabia/@28.4103621,36.5675854,19z/data=!4m6!3m5!1s0x15a9ad764a9dbbb9:0x21f49a0877b5934b!8m2!3d28.4106773!4d36.5675483!16s%2Fg%2F11v67qvl2d"                ',

            },
            {
                Title: 'WhatsApp',
                Icon: <BsWhatsapp className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Color: 'green',
                Value: '0508122303',
                Href: "//api.whatsapp.com/send?phone=201126798092&text=Hello"
            },
            {
                Title: 'Email',
                Icon: <MdEmail className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Value: '0538725276',
                Color: 'red',
                Href: 'mailto:mohammedhuzain@hotmail.com'
            },
            {
                Title: 'Snapchat',
                Icon: <BiLogoSnapchat className="contact-btn" color="var(--primary-text-clr)" size="25" />,
                Value: 'mo2023',
                Color: 'yellow',
                Href: 'https://www.snapchat.com/add/mo2023'
            },
        ]
    },
    Address: {
        Title: 'Address',
        Address: `Al Sulaimaniyah District
        across from Tabuk Municipality - Tabuk`,
        ActionButton: 'Find Us'
    },
    Navigation: {
        Elements: [
            {
                Title: 'About',
                Icon: <AiOutlineQuestionCircle className="contact-btn" color="var(--primary-text-clr)" size="25"/>,
                Href: 'about-us',
            },
            {
                Title: 'Services',
                Icon: <MdOutlineDesignServices className="contact-btn" color="var(--primary-text-clr)" size="25"/>,
                Href: 'our-services'
            },
            {
                Title: 'Projects',
                Icon: <AiOutlineFundProjectionScreen className="contact-btn" color="var(--primary-text-clr)" size="25"/>,
                Href: 'our-projects'
            },
            {
                Title: 'Departments',
                Icon: <AiOutlineTeam className="contact-btn" color="var(--primary-text-clr)" size="25"/>,
                Href: 'our-team'
            }
        ],
    },
    Content: {
        AboutUs: {
            Title: 'About Us',
            Elements: [
                {
                    Title: "Overview",
                    Content: 'Modern Plan Company, a leading entity in the field of architectural and engineering design, project management, and construction in the Kingdom of Saudi Arabia. With over 30 years of experience in designing hotel towers, commercial complexes, residential buildings, and more. We redefine the urban skyline and innovate exceptional spaces for the future.'
                },
                {
                    Title: 'Our Goal',
                    Content: 'Our ultimate mission is to become the most preferred and sought-after architectural and engineering consultants. We strive diligently to achieve excellence in all aspects of our work, combining creative vision with high technical expertise to deliver unique and innovative designs that exceed our clients\' expectations.'
                },
                {
                    Title: 'Our Message',
                    Content: 'We strive diligently to provide our clients with the best innovative and high-quality solutions. We believe that excellence is the foundation of building sustainable relationships with our clients, and therefore, we work with dedication and professionalism to meet and exceed their expectations. We value the details of our clients\' needs and seek to fully understand the nature of their business and challenges, in order to offer them precise and effective solutions.'
                },
            ]
        },
        OurServices: {
            Title: 'Our Services',
            Elements: [
                {
                    Title: 'Architectural and Engineering Design',
                    Content: 'Comprehensive planning and integrated design of buildings and facilities',
                    Icon: <MdOutlineDesignServices color='gray' size='40' />,
                },
                {
                    Title: 'Interior Design',
                    Content: 'Planning and designing interior spaces for buildings and facilities',
                    Icon: <PiCouchLight color='gray' size='40' />
                },
                {
                    Title: 'Master Planning',
                    Content: 'Comprehensive planning for area and project development',
                    Icon: <AiOutlineSetting color='gray' size='40' />
                },
                {
                    Title: 'Mechanical, Electrical, and Plumbing Engineering (MEP)',
                    Content: 'Design and implementation of mechanical, electrical, and plumbing systems for buildings',
                    Icon: <AiOutlineSetting color='gray' size='40' />
                },
                {
                    Title: 'Security, Safety, and Civil Defense',
                    Content: 'Design and implementation of fire suppression and civil defense systems',
                    Icon: <AiOutlineSafety color='gray' size='40' />
                },
                {
                    Title: 'Maintenance Management',
                    Content: 'Planning and supervision of maintenance activities for facilities and structures',
                    Icon: <FaHelmetSafety color='gray' size='40' />
                },
                {
                    Title: 'Automation and Training',
                    Content: 'Development and implementation of automation systems and employee training',
                    Icon: <AiOutlineRobot color='gray' size='40' />
                },
            ]
        },
        OurProjects: {
            Title: 'Our Projects',
            Elements: [
                {
                    MainImage: I1,
                    Title: 'Villa Code Wadi Hanifa',
                    Location: 'Riyadh, Saudi Arabia',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I2,
                    Title: 'Competition of the Ministry of Awqaf Branch',
                    Location: 'Mecca, Saudi Arabia',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I3,
                    Title: 'Resedential Villa',
                    Location: 'Riyadh, Saudi Arabia',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I41,
                    Title: 'Office Building',
                    Location: 'Al-Khobar, Saudi Arabia',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: I42,
                    // Sketches: '',
                },
                {
                    MainImage: I5,
                    Title: 'Resedential Villa',
                    Location: 'Riyadh, Saudi Arabia',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I6,
                    Title: '300-Prayer Mosque',
                    Location: 'Hottein district',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
                {
                    MainImage: I7,
                    Title: 'Resedential Villa',
                    Location: 'Riyadh',
                    // Scope: 'Scope',
                    // Date: '11/12/3',
                    // Images: '',
                    // Sketches: '',
                },
            ]
        },
        OurTeam: {
            Title: 'Our Technical and Administrative Team',
            Elements: [
                {
                    Name: 'Eng. Mohammed Huzain Mustafa',
                    Rule: 'Project Manager',
                },
                {
                    Name: 'Eng. Ahmed Al-Attia',
                    Rule: 'Office Manager',
                },
                {
                    Name: '',
                    Rule: 'Supervision Department Manager',
                }
            ]
        },
        OrgChart: {
            Title: 'Organizational Chart'
        }
    },
    Footer: {}
};

export default { EnglishContext, ArabicContext }