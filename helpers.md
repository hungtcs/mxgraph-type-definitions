RegExp Helper
====

1. for type variable type
    ```
    ^(\w+) = (true|false);
    $1: boolean;

    ^(\w+) = (\d+(\.\d+)?);
    $1: number;
    ```
2. default value for variables
    ```
    Default is (.+)\.
    \n * @default $1
    ```
3. for links
    ```
    <(\w+(\.|\w+)*)>
    {@link $1}
    ```
4. for function params
    ```
    \* (\w+) -
    * @param $1
    ```
5. for example codes
    ```
    \(code\)
    @example \n * ```javascript

    \(end\) to ```
    ```
6. replace to blank
    ```
    \n \* Variable: .+\n \*
    \n \* Function: .+\n \*
    \n \* Parameters:\n \*
    = function
    ```
