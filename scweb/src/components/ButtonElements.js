import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
 border-radius: 50px;
 background: ${({primary}) => (primary ? '#fff' : '#6C63FF')
 };
 white-space: nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
 color: ${({dark}) => (dark ? '#6C63FF' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;

 &:hover{
     transition: all 0.2s ease-in-out;
     background: ${({primary}) => (primary ? '#E60E2D' : '#000C33')};
 }
`;