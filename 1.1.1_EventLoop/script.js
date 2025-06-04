const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout
    setTimeout(() => {
        updateOrderStatus(order, 'Listo para Entregar');
        deliverOrder(order);
    }, 2000); // Simula un tiempo de preparación de 2 segundos

    // TODO: Actualizar el estado del pedido a "Completado"
    setTimeout(() => {
        updateOrderStatus(order, 'Completado');
    }, 4000); // Simula un tiempo total de procesamiento de 4 segundos
}