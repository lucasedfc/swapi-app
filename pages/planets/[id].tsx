import React from "react";
import { Link, Button } from "@mui/material";
import PlanetDetail from "@/components/Planets/PlanetDetail";

const PlanetInfo = ({ planet }: any) => {
    return (
        <>
        <p className="mt-10 text-center">
                <Link href="/planets">
                    
                        <Button>Back</Button>
                    
                </Link>
            </p> 
            <PlanetDetail planet={planet} />
            
        </>
    );
};

export const getServerSideProps = async (context: any) => {
    const { id } = context.query;
    const res = await fetch(`https://swapi-nest.cyclic.cloud/api/planets/${id}`);
    const planet = await res.json();
    return {
        props: { planet },
    };
}

export default PlanetInfo;