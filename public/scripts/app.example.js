class App {
    constructor() {
        this.loadButton = document.getElementById("load-btn");
        this.carContainerElement = document.getElementById("cars-container");
        this.tipeDriver = document.getElementById("driver");
        this.tanggal = document.getElementById("date");
        this.waktuJemput = document.getElementById("time");
        this.jumlahPenumpang = document.getElementById("passenger");
    }

    async init() {
        await this.load();
        this.loadButton.onclick = this.runFilter;
    }

    runFilter = async () => {
        this.clear();
        if (this.validateMandatoryFields()) {
            await this.loadFilter();
            this.run();
        } else {
            this.showErrorMessage("You must fill the mandatory fields");
        }
    };

    validateMandatoryFields() {
        return (
            this.tipeDriver.value !== "" &&
            this.tanggal.value !== "" &&
            this.waktuJemput.value !== ""
        );
    }

    showErrorMessage(message) {
        const errorNode = document.createElement("div");
        errorNode.classList.add("error-message");
        errorNode.textContent = message;
        this.carContainerElement.appendChild(errorNode);
    }

    run = () => {
        if (Car.list.length === 0) {
            this.showErrorMessage("No cars found matching your criteria");
        } else {
            Car.list.forEach((car) => {
                const node = document.createElement("div");
                node.classList.add("col-lg-4");
                node.innerHTML = car.render();
                this.carContainerElement.appendChild(node);
            });
        }
    };

    async load() {
        const cars = await Binar.listCars();
        Car.init(cars);
    }

    async loadFilter() {
        const cars = await Binar.listCars((car) => {
            const tanggalJemputData = new Date(car.availableAt).getTime();
            const tanggal = new Date(
                `${this.tanggal.value} ${this.waktuJemput.value}`
            ).getTime();
            const checkWaktu = tanggalJemputData >= tanggal;
            const availableAt =
                this.tipeDriver.value === "1" ? car.available : true;
            const notAvailableAt =
                this.tipeDriver.value === "2" ? !car.available : true;
            const penumpang =
                this.jumlahPenumpang.value !== ""
                    ? car.capacity >= parseInt(this.jumlahPenumpang.value)
                    : true;

            return availableAt && notAvailableAt && checkWaktu && penumpang;
        });

        Car.init(cars);
    }

    clear = () => {
        let child = this.carContainerElement.firstElementChild;
        while (child) {
            child.remove();
            child = this.carContainerElement.firstElementChild;
        }
    };
}
