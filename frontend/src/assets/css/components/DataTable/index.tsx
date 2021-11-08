
function DataTable() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes alcançados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>07/11/2021</td>
            <td>Hugão</td>
            <td>34</td>
            <td>30</td>
            <td>11.890,00</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default DataTable;