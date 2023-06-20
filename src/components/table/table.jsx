import React from "react";

const Table = ()=>{
    return(
        <div className="table">
            <div className="table__wrapper">
                <div className="table__header">
                    <div className="table__item ">Имя</div>
                    <div className="table__item">Фамилия</div>
                    <div className="table__item">Год рождения</div>
                    <div className="table__item">Телефон</div>
                </div>
                <div className="table__persons">
                    <div className="table__person person">
                        <div className="person__field ">Василий</div>
                        <div className="person__field">Петров</div>
                        <div className="person__field">1996</div>
                        <div className="person__field">9 922 - 364- 84-32</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Table