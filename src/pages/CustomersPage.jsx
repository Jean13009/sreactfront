import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomersPage = (props) => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("https://syreact.herokuapp.com/api/customers", {headers: {
            'Content-Type': 'application/ld+json; charset=utf-8'
            }
        }
        )
        .then(response => response.data["hydra:member"])
        .then(data => setCustomers(data));
    }, [])

    return (
    <>
        <h1>Liste des clients</h1>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>client</th>
                    <th>Email</th>
                    <th>Entreprises</th>
                    <th>Factures</th>
                    <th>Montant total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer =>
                                    <tr ket={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>
                                        <a href="#">{customer.firstName} {customer.lastName}</a>
                                    </td>
                                    <td>{customer.email}</td>
                                    <td>{customer.company}</td>
                                    <td>{customer.invoices.length}</td>
                                    <td>{customer.totalAmount.toLocaleString()} €</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger">Supprimer</button>
                                    </td>
                                </tr>
                    )}
            </tbody>

        </table>
    </>
    );
};
 
export default CustomersPage;