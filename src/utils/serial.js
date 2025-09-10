let port;
let reader;
let writer;
let binary;
let message;

export async function connectSerial() {
    // // 1. Ask user to select port
    // port = await navigator.serial.requestPort();

    // // 2. Open port
    // await port.open({ baudRate: 9600 });

    // // 3. Setup writer
    // writer = port.writable.getWriter();

    // // 4. Setup reader
    // reader = port.readable.getReader();
    // console.log("Connected to serial device");
    return true
}
export async function getdevice(){
    return "TX"
}

// Send data
export async function sendMessage(msg) {
    const encoder = new TextEncoder();
    // await writer.write(encoder.encode(msg));
    // console.log(msg)
    message=msg
    binary=encoder.encode(msg);

}

// Receive data
export async function receiveMessages() {
    // while (true) {
    //     const { value, done } = await reader.read();
    //     if (done) break;
    //     console.log("Received:", new TextDecoder().decode(value));
    // }

    const decoder = new TextDecoder();
    // let mssg=decoder.decode(binary);
    return message;
}
export async function receiveBinary(){
    let binaryString = Array.from(binary)
  .map(byte => byte.toString(2).padStart(8, "0")) 
  .join(" ");

console.log(binaryString);
return binaryString


}

// Disconnect
// async function disconnectSerial() {
//     reader.releaseLock();
//     writer.releaseLock();
//     await port.close();
//     console.log("Disconnected");
// }
