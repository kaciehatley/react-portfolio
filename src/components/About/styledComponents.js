import styled from 'styled-components';
import { Image } from 'semantic-ui-react';


export const StyledImage = styled(Image)`
    &&& {  
        border: 1px solid white;
        display: inline-block;
        width: 200px;
        height: 150px;
        margin: 20px;
        border: 1px solid gray;
    }
`;