import { Button, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { getMealById } from '../../api'
import Preloader from '../Preloader'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Recipe = () => {




    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getMealById(id).then((data) =>setRecipe(data.meals[0]))
    },[id])
  return (
    <>
    <Button variant="contained" sx={{ mb: 3,mt: 3 }} onClick={() => navigate(-1)}>    
       go back
    </Button>

        {
          !recipe.idMeal ? <Preloader/> : (
 <div className='recipe'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>



                    <TableContainer component={Paper} sx={{ maxWidth: 360 }}>
                        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="left"><b>Ingredient</b></TableCell>
                              <TableCell align="left"> <b>Measure</b> </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            

                            {Object.keys(recipe).map((key) => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                      
                                <TableCell align="left">{recipe[key]}</TableCell>
                                <TableCell align="left"> {
                                                                      recipe[
                                                                          `strMeasure${key.slice(
                                                                              13
                                                                          )}`
                                                                      ]
                                                                  }</TableCell>
                              </TableRow>
                                        );
                                    }
                                    return null;
                                })}
                          </TableBody>
                        </Table>
                      </TableContainer>



                    {recipe.strYoutube ? (
                        <div >
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>
                                Video Recipe
                            </h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                
                            />
                        </div>
                    ) : null}
                </div>
          )
        }
            <Button variant="contained" sx={{ mb: 3,mt: 3 }} onClick={() => navigate(-1)}>    
       go back
    </Button>
    </>
  )
}

export default Recipe