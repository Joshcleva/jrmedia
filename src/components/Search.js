import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {

// const [type, setType] = useState(0);
const submitSearch=(e)=> {
    e.preventDefault();
    alert('Searched Sucessfully')
}

    return (
        <Nav>
            <Inputs>
            <form onSubmit={submitSearch} >
                <input type="text" placeholder="Search songs, artists & albums"/>
                <button type="submit" >
                    <SearchIcon />
                </button>
            </form>
            </Inputs>
        </Nav>
    )
}

export default Search;

const Nav = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
 }
`;

const Inputs = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

form {
    flex: 1;
    display: flex;
    padding: 0.1rem;
    margin: 0.1rem;
    border-radius: 50px;
    background: #999;

    input {
        width: 100%;
         border-radius: 50px;
        padding: 0.5rem;
        border: none;
        font-weight: 500;
        background: #999;
        color: #fff;

        &:focus {
            border: none;
            outline: none;
        }

    }

    button {
        background: transparent;
        border: none;
        color: #fff;
        padding-right: 10px;
        cursor: pointer;
    }

}


`;
