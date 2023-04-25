pragma solidity 0.8.17;

library MockLibrary {
    function internalMethod() internal view returns (uint256) {
        return 1234;
    }

    function externalMethod() external view returns (uint256) {
        return 42;
    }
}