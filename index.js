
// Import modules.
var system = require('os')

// Get info.

// Generic info outputting
console.log('Type : '+system.type());
console.log('Arch : '+system.arch());
console.log('Kernel : '+system.release());
console.log('Kernel release details : '+system.version());

// Memory details.

// Calculate free memory.
var free_memory = system.freemem();
var free_mem_in_kb = free_memory/1024;
var free_mem_in_mb = free_mem_in_kb/1024;

free_mem_in_kb = Math.floor(free_mem_in_kb);
free_mem_in_mb = Math.floor(free_mem_in_mb);

// Calculate total memory.
var total_memory = system.totalmem();
var total_mem_in_kb = total_memory/1024;
var total_mem_in_mb = total_mem_in_kb/1024;

total_mem_in_kb = Math.floor(total_mem_in_kb);
total_mem_in_mb = Math.floor(total_mem_in_mb);

used_mem_in_mb = total_mem_in_mb - free_mem_in_mb;

// Output details.
console.log('Free memory : '+free_mem_in_mb + ' MB ');
console.log('Total memory : '+total_mem_in_mb + ' MB ');
console.log('Used memory : '+used_mem_in_mb + ' MB ')

// Uptime.
var seconds = system.uptime();
var minutes = seconds/60;
var hours = minutes/60;

seconds = Math.floor(seconds);
minutes = Math.floor(minutes);
hours = Math.floor(hours);

hours = hours%60;
minutes = minutes%60;
seconds = seconds%60;

// Output details.
console.log("System uptime: " 
        + hours + " Hour(s) " 
        + minutes + " minute(s) and " 
        + seconds + " second(s)");  

// Hostname.
var host = system.hostname();
console.log("Hostname: " + host);

// CPU model.
console.log("CPU model: " +system.cpus()[0].model) 
console.log("CPU speed in MHZ: " +system.cpus()[0].speed) 
console.log("Number of CPU cores: " +system.cpus().length) 
