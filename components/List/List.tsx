import Item from "./Item/Item"

const List = ({data}:any) => {
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}>
            {data?.items?.map((item:any) => {
                return (
                    <Item key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default List