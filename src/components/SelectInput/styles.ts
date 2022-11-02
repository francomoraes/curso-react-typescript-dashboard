import styled from "styled-components";

export const Container = styled.div`
    margin-left: 13px;

    @media (max-width: 600px) {
        margin: 0 auto;
    }

    > select {
        padding: 7px 10px;
        border-radius: 5px;
        width: 100%;
    }
`;