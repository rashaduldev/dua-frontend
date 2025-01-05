import DuasSearchBar from '@/components/DuasSearchBar';
import IconSidebar from '@/components/IconSidebar';
import SettingsSidebar from '@/components/SettingsSidebar';

const Homepage = () => {
    return (
        
        <div>
             <div className="flex flex-row justify-center mx-36 mt-10">
                <div className="w-[6%]">
                    <IconSidebar  />
                </div>
                <div className="w-[74%] mr-4">
                    <DuasSearchBar  />
                </div>
                <div className="w-[20%]">
                    <SettingsSidebar  />
                </div>
            </div>
        </div>
    );
};

export default Homepage;