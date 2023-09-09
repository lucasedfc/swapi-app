import React from "react";
import { Link, Button } from "@mui/material";
import SWCharacter from "@/components/People/Character";

const CharacterInfo = ({ character }: any) => {
    return (
        <>
        <p className="mt-10 text-center">
                <Link href="/people">
                    
                        <Button>Back</Button>
                    
                </Link>
            </p> 
        
            <SWCharacter starWarsCharacter={character} />
            
        </>
    );
};

export const getServerSideProps = async (context: any) => {
    const { id } = context.query;
    const res = await fetch(`https://swapi-nest.cyclic.cloud/api/people/${id}`);
    const character = await res.json();
    return {
        props: { character },
    };
}

export default CharacterInfo;