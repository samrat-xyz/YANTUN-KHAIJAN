const foods =[
    {
        id:1,
        title:'Burger'
    },
    {
        id:2,
        title:'Pizza'
    }
]

export async function GET(req){
    return Response.json(foods)
}