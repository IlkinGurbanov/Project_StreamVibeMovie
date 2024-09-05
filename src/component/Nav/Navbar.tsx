import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Navbar.css'

interface NavbarProps {
    onSearchInputChange: (value: string) => void;
  }
const Navbar: React.FC<NavbarProps> = ({ onSearchInputChange }) => {
    const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

    const [isDisplay,setisDisplay] = useState<string>('none')
    const handleSearch = () => {
        if(isDisplay == 'none'){
            setisDisplay('block')
        }
        else if(isDisplay == 'block'){
            setisDisplay('none')
        }
    }
    const handlesearch = () => {
        onSearchInputChange(searchValue); // Pass the input value to the parent component
    }
    return(
        <div className="Navbar">
            <div className="nav">
                <div className="navstart">
                    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.7834 24.0839C49.3635 10.9327 38.7071 0.319787 25.5115 0C25.1716 0 24.8917 0.259827 24.8917 0.5996L24.8717 9.43371C24.8717 9.87342 24.5318 10.2132 24.092 10.2332C10.9364 10.6329 0.319893 21.3058 0 34.497C0 34.8368 0.259913 35.1166 0.5998 35.1166L9.41686 35.1366C9.85671 35.1366 10.1966 35.4763 10.2166 35.9161C10.6365 49.0673 21.3129 59.6802 34.4885 60C34.8284 60 35.1083 59.7402 35.1083 59.4004L35.1283 50.5663C35.1283 50.1266 35.4682 49.7868 35.908 49.7668C49.0636 49.3471 59.6801 38.6742 60 25.503C60 25.1632 59.7401 24.8834 59.4002 24.8834L50.5831 24.8634C50.1433 24.8634 49.8034 24.5236 49.7834 24.0839ZM34.2486 49.7069C26.7711 49.2672 20.7731 43.1912 20.4932 35.6762C20.4732 35.3564 20.2133 35.0966 19.8934 35.0966L11.0963 35.0766C10.6365 35.0766 10.2766 34.6969 10.2966 34.2372C10.7364 26.7622 16.8144 20.7662 24.3319 20.4863C24.6518 20.4664 24.9117 20.2065 24.9117 19.8867L24.9317 11.0726C24.9317 10.6129 25.3116 10.2532 25.7714 10.2732C33.2489 10.7129 39.2469 16.7888 39.5268 24.3038C39.5468 24.6236 39.8067 24.8834 40.1266 24.8834L48.9237 24.9034C49.3835 24.9034 49.7434 25.2831 49.7234 25.7428C49.2836 33.4177 42.9057 39.5137 35.1283 39.5137L35.1083 48.9074C35.0883 49.3671 34.7084 49.7268 34.2486 49.7069Z" fill="#E60000"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6304 24.6826C24.6304 23.4732 25.927 22.7066 26.9866 23.2894L36.7729 28.6719C37.8713 29.276 37.8713 30.8542 36.7729 31.4582L26.9866 36.8407C25.9269 37.4235 24.6304 36.6569 24.6304 35.4475V24.6826Z" fill="white"/>
                    </svg>
                    <strong className="navstarttext">StreamVibe</strong>
                </div>
                <div className="navmain">
                    <span className="navmaintext">Home</span>
                    <span className="navmaintext" style={{color:'white',background:'#1A1A1A'}}>Movies & Shows</span>
                    <span className="navmaintext">Support</span>
                    <span className="navmaintext">Subscriptions</span>
                </div>
                <div className="navend">
                    <SearchIcon className='searchicon' onClick={handleSearch}/>
                    <NotificationsNoneIcon className='ringicon'/>
                </div>
            </div>
            <div className="search-container" style={{ display: `${isDisplay}` }}>
                    <input value={searchValue} onChange={handleSearchInputChange} type="text" className="search-input" placeholder="Search..."/>
                    <span className='span' onClick={handlesearch}>
                        <SearchIcon className="search-icon" />
                    </span>
            </div>
        </div>
    )
}
export default Navbar;