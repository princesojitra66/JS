#include <iostream>
using namespace std;

void display(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int linearsearch(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

int binarysearch(int arr[], int start, int end, int key) {
    if (start <= end) {
        int mid = (start + end) / 2;
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] > key) {
            return binarysearch(arr, start, mid - 1, key);
        } else {
            return binarysearch(arr, mid + 1, end, key);
        }
    }
    return -1;
}

void selectionsort(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        int smallest = i;
        for (int j = i + 1; j < size; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        swap(arr[i], arr[smallest]);
    }
}

void merge(int arr[], int start, int mid, int end) {
    int temp[100];
    int i = start, j = mid + 1, k = 0;

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid)
    {
        temp[k++] = arr[i++];
    } 
        
    while (j <= end)
    {
        temp[k++] = arr[j++];
    }

    for (int p = 0; p < k; p++) {
        arr[start + p] = temp[p];
    }
}

void mergesort(int arr[], int start, int end) {
    if (start < end) {
        int mid = (start + end) / 2;
        mergesort(arr, start, mid);
        mergesort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

int main() {
    int size;
    cout << " ===== Welcome to Sorting and Searching Agency  =====" << endl;
    cout << "Enter your array size and elements: ";
    cin >> size;
    int arr[size];

    for (int i = 0; i < size; i++) {
        cout << "Enter your array elements: ";
        cin >> arr[i];
    }

    int choice;

    do {
        cout << endl <<"1. Display the array elements" << endl;
        cout << "2. Sort the array elements " << endl ;
        cout << "3. Search in the array element" << endl ;
        cout << "0. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
        case 1:
            cout << "The array is: ";
            display(arr, size);
            break;

        case 2: {
            int sort;
            do {
                cout << endl << "Welcome to Sorting Area";
                cout <<endl<<  "1. Selection sort "<<endl ;
                cout << "2. Merge sort "<< endl;
                cout << "0. Exit" << endl;
                cout << "Enter your choice: ";
                cin >> sort;

                switch (sort) {
                case 1:
                    selectionsort(arr, size);
                    display(arr, size);
                    break;
                case 2:
                    mergesort(arr, 0, size - 1);
                    display(arr, size);
                    break;
                }
            } while (sort != 0);
            break;
        }

        case 3: {
            int search;
            do {
                cout << endl << "Welcome to searching Area" ;
                cout << endl << "1. Linear search "  << endl ;
                cout <<"2. Binary search"<< endl;
                cout << "0. Exit" << endl;
                cout << "Enter your choice: ";
                cin >> search;

                switch (search) {
                case 1: {
                    int key;
                    cout << "Enter your key: ";
                    cin >> key;
                    int index = linearsearch(arr, size, key);
                    if (index == -1){
                        cout << "Key not found" << endl;
                    }else{
                        cout << "Key found at index " << index << endl;
                    }
                    break;
                }
                case 2: {
                    int key;
                    cout << "Enter your key: ";
                    cin >> key;
                    selectionsort(arr, size);
                    int index = binarysearch(arr, 0, size - 1, key);
                    if (index == -1){
                        cout << "Key not found" << endl;
                    } else{
                        cout << "Key found at index " << index << endl;
                    }
                    break;
                }
                }
            } while (search != 0);
            break;
        }

        case 0:
            cout << "thank you for using our services" << endl;
            cout << "Exiting program..." << endl;
            break;

        default:
            cout << "Invalid choice" << endl;
        }
    } while (choice != 0);

    return 0;
}
